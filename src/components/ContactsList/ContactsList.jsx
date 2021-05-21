import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        {name}: {number}
        <button className={s.button} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.items, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteName(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
