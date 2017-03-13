import React from 'react'
import moment from 'moment'
import Modal from '../components/Modal'
import InputGroup from '../components/InputGroup'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title || '',
      date: props.date || moment().format('YYYY-MM-DD'),
      desc: props.desc || '',
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { title, date, desc } = this.state
    return(
      <Modal open={true} >
        <InputGroup type='text' label='Title' value={title} onChange={this.onChange} id='title'/>
        <InputGroup type='date' label='Due Date' value={date} onChange={this.onChange} id='date'/>
        <InputGroup type='textarea' label='Description' rows={3} value={desc} onChange={this.onChange} id='desc'/>
      </Modal>
    )
  }
}

export default TodoForm
