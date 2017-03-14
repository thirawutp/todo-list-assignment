import { connect } from 'react-redux'
import Header from '../components/Header'
import { openCreateForm } from '../actions/formAction'

const mapDispatchToProps = {
    onClick: openCreateForm
}

export default connect(null,mapDispatchToProps)(Header)
