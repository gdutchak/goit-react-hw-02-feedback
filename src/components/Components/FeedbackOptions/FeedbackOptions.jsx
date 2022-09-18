import { FeedbackButton } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>{options.map(option => <FeedbackButton type="button" key={option}
        onClick={onLeaveFeedback} name={option}>{option}</FeedbackButton>)
    }</>
)
