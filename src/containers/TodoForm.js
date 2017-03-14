import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import InputGroup from '../components/InputGroup'

import { createTodo, editTodo } from '../actions/todoActions'
import { closeForm } from '../actions/formAction'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title || '',
      date: props.date || moment().format('YYYY-MM-DD'),
      desc: props.desc || '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.isCreate
      ? this.handleCreateTodo()
      : this.handleEditTodo()

    this.handleClose()
  }

  handleCreateTodo() {
    let todo = {
      _id: Date.now(),
      completed: false,
      ...this.state
    }
    this.props.createTodo(todo)
  }

  handleEditTodo() {
    let todo = {
      ...this.props.value,
      ...this.state
    }
    this.props.editTodo(todo)
  }

  handleClose() {
    this.setState({ 
      title: '', 
      date: moment().format('YYYY-MM-DD'),
      desc: ''
    })
    this.props.closeForm()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value) {
      const { _id, title, date, desc, completed } = nextProps.value
      this.setState({ _id, title, date, desc, completed })
    }
  }

  render() {
    const { date, desc, title } = this.state
    const { open, isCreate } = this.props
    const modalTitle = isCreate ? 'Create new todo list' : `Edit todo list ID: ${this.state._id}`
    return(
      <Modal title={modalTitle} open={open} onSubmit={this.onSubmit} disableSubmit={!title} onClose={this.handleClose} >
        <InputGroup type='text' label='Title' value={title} onChange={this.onChange} id='title'/>
        <InputGroup type='date' label='Due Date' value={date} onChange={this.onChange} id='date'/>
        <InputGroup type='textarea' label='Description' rows={3} value={desc} onChange={this.onChange} id='desc'/>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.form.open,
  isCreate: state.form.isCreate,
  value: state.form.value
})

const mapDispatchToProps = {
  createTodo,
  editTodo,
  closeForm,
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
