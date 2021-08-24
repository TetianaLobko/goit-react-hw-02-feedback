import s from "./Notification.module.css"
import PropTypes from "prop-types";

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
