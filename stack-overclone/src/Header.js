import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';



const StyleHeader = styled.header`
    box-shadow: 0 3px 3px rgba(0,0,0, .2);
    display:grid;
    grid-template-columns: 220px 1fr 200px;
    grid-column-gap: 20px;
`
;

const LogoLink = styled.a`
    color: #fff;
    text-decoration: none;
    display: inline-block;
    height: 30px;
    line-height: 20px;
    padding: 10px  15px;
    svg {
        margin-top:5px;
        display: inline-block;
        float: left;
        height: 2rem;
    }
    span {
        display: inline-block;
        padding-left: 5px;
        padding-top: 10px;
        font-size: 1.2 rem;
        font-weight: 300; 
    }
    b {
        font-weight: normal;
        display: inline-block;
        margin-left: 2px;
    }
`;
const SearchInput = styled.input `
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #777;
    background: rgba(0, 0, 0, .1);
    padding: 8px 10px;
    margin-top: 9px;
`

const ProfileLink = styled.a `
    color: #fff;
    text-decoration: none;
    line-height: 50px;
`
const Header = () => {
    return (
        <StyleHeader>
            <LogoLink href="" className="logo">
            <FontAwesomeIcon icon={faStackOverflow} size="3x" />
            <span> stack<b>overflow</b></span>
            </LogoLink>
            <form action="" className="search">
                <SearchInput type="text" placeholder="Search..."/>
            </form>
                <ProfileLink href="" className="profile">Sooloth</ProfileLink>
        </StyleHeader>
    )
}

export default Header;