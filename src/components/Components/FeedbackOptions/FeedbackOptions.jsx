import PropTypes, { shape } from 'prop-types';
import { FeedbackButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>{options.map(option => <FeedbackButton type="button" key={option}
        onClick={onLeaveFeedback} name={option}>{option}</FeedbackButton>)
    }</>
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(shape),
    onLeaveFeedback: PropTypes.func,
}