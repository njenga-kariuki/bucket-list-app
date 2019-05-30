import React, {Component} from 'react'
import {Feed,Container,Modal,Form, Button} from 'semantic-ui-react'
const moment = require('moment')

class NotesContainer extends Component {

  state = {
    newNoteText: '',
    noteList: [],
    modelOpen:false
  }

  componentDidMount = () =>{
    this.setState({noteList: this.renderNotes()})
  }

  //iterates through each note and formats into object for render
  renderNotes = () => {
    let tempNoteList = []
    if (this.props.notes){
      this.props.notes.forEach((note, index)=>{
        let noteObj = this.renderSingleNote(note)
        tempNoteList.push(noteObj)
      })
    }
    return tempNoteList
  }

  //helper to format a single note into object that can be passed into render
  renderSingleNote = (note) => {
    let date = moment(note.date_created).format('MM/DD/YY');
    let noteObj = {
      meta: `${note.first_name} | ${date}`,
      summary: note.note_text
    }
    return noteObj
  }

  //stores new note text in state
  handleChange = ev => {
    this.setState({newNoteText: ev.target.value})
  }

  //changes state to show modal
  handleModalOpen = () => {
    this.setState({modelOpen:true})
  }

  //changes state to hide model
  handleModalClose = () => {
    this.setState({modelOpen:false})
  }

  //posts new note to backend --- WIP NEED TO CREATE BODY AND FIX URL
  handleNoteSubmit = (ev) => {
    let userID = localStorage.getItem('user_id')
    let token = localStorage.getItem('jwt')

    fetch(`http://localhost:3000/api/v1/users/${userID}/trip_details/${this.props.tripId}/trip_notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
      },
      body: JSON.stringify({
        trip_note: {
          trip_id: this.props.tripId,
          user_id: userID,
          note: this.state.newNoteText
        }
      })
    })
    .then(resp => resp.json())
    .then(data=>{
      console.log(data)
      let tempNote = {date_created: data.trip_note.created_at, first_name: data.trip_note.user_data.first_name, note_text: data.trip_note.note}
      this.setState({
        noteList:[...this.state.noteList, this.renderSingleNote(tempNote)],
        newNoteText:""
      })
    })
  }

  render() {
    this.renderNotes()

    return (
      <Container>
        {this.state.noteList.length > 0 ? <Feed textAlign= 'center' events={this.state.noteList}/> : <span>Keep track of things you want to remember when you go on this trip (e.g., places to visit, reccomendations from friends).</span>}
        <Modal trigger={<Button onClick={this.handleModalOpen} open={this.state.modelOpen} basic>Create New Note</Button>} onClose={this.handleModalClose} closeIcon centered={false}>
          <Modal.Header>Create New Trip Note</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form onSubmit={(ev)=>this.handleNoteSubmit(ev)}>
                    <Form.TextArea name="newNoteText" value={this.state.newNoteText} onChange={(ev)=>this.handleChange(ev)} placeholder="Example: Make sure to visit St.Peter Winery - reccomended by Becca."/>
                    <Modal.Actions><Form.Button onClick={this.handleModalClose}>Submit</Form.Button></Modal.Actions>
                </Form>
              </Modal.Description>
            </Modal.Content>
        </Modal>

      </Container>
    )
  }
}

export default NotesContainer;
