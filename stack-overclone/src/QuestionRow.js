import styled from "styled-components"

const QuestionStat = styled.div`
    text-align: center;
    font-size: 1.2rem;
    display: inline-block;
    color: #aaa;
    margin-top: 7px;
    span{
        font-size: .7rem;
        display: block;
        font-weight: 300;
        margin-top: 6px;
    } 
`;
const QuestionTitleArea = styled.div`
    padding: 0 30px;
`;
const QuestionLink = styled.a`
    text-decoration: none;
    color: #3ca4ff;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px;
    `;
const Tag = styled.span`
    display: inline-block;
    margin-right: 5px;
    background-color: #3e4a52;
    color: #9cc3db;
    padding: 7px;
    border-radius: 4px;
    font-size: .9rem;
    `;
const StyledQuestionRow = styled.div` 
    background-color: rgba(255,255,255,.05);
    padding: 15px 15px 10px;
    display: grid;
    grid-template-columns: repeat(3, 60px) 1fr;
    border-top: 1px solid #555;
`;
const WhoAndWhen = styled.div`
    display: inline-block;
    color: #aaa;
    font-size: .8rem;
    /* float: right;  */
    margin-left: 50rem;
    padding: 10px 0
`;
const UserLink = styled.a`
    color: #3cacff;
`;
const QuestionRow = () => {
    return(
        <StyledQuestionRow>
            <QuestionStat>0<span>votes</span></QuestionStat>
            <QuestionStat>1<span>answer</span></QuestionStat>
            <QuestionStat>10<span>views</span></QuestionStat>
            <QuestionTitleArea>
                <QuestionLink> Getting string in quotes in javascript </QuestionLink>
                <Tag>javascript</Tag>
                <Tag>parsing</Tag>
                <Tag>quotes</Tag>
                <Tag>literals</Tag>
                <WhoAndWhen>
                    Asked 2 mins ago <UserLink>Sooloth</UserLink>
                </WhoAndWhen>
            </QuestionTitleArea>
        </StyledQuestionRow>
    )
}

export default QuestionRow;