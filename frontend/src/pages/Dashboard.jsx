import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../component/GoalForm'
import GoalItem from'../component/GoalItem'
import Spinner from '../component/Spinner'
import { getGoals,reset } from '../features/goals/goalSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponet from '../component/CardComponent';
import Game2 from '../component/game2Card';
import Raffle from '../component/RaffleCard';
//import CardComponetTwo from '../component/CardComponentTwo'
//import TableComponent from '../component/TableComponent'
import Header from '../component/Header'
import Widgetbot from '@widgetbot/react-embed'

require('dotenv').config()
function Dashboard(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    const{goals,isLoading,isError,message} = useSelector(
        (state) => state.goals
    )
    useEffect(()=>{
        if(isError){
            console.log(message)
        }
        if(!user){
            navigate('/login')
        }
        //dispatch(getGoals())

        return()=>{
            dispatch(reset())
        }
    },[user,navigate,isError,message,dispatch])

    if(isLoading){
        return<Spinner/>
    }

    return(
        <>
        <section className='App'>
            <h1> Welcome { user && user.name}</h1>
            <p className='App'>Gamers Dashboard</p> 
            <div className="container">  <h1>Web Based Games </h1></div>  
            
            <div className="container"> <Container className='App'>
            
            
           
        </Container></div>
            <Container fluid>
      <Row className='App'>
      <Col><CardComponet style='App'/></Col>
        <Col><Game2 style='App'/></Col>
        {/**  <Col><Raffle/></Col>*/}
       
        <Col><iframe src={process.env.DISCORD_SERVER_URL} width="300" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></Col>
      </Row>
      <Row>
        <h2 style={{paddingBottom:100}}>Mobile Games</h2>
        <Col>
        
        </Col>
      </Row>
      <Row>
      <Widgetbot  server={process.env.DISCORD_SERVER_ID}
    channel={process.env.DISCORD_SERVER_CHANNEL}
   height="800" style={{paddingTop:10}}
       />
      </Row>
    </Container>   
            
        </section>
        <GoalForm className="App"/>

       
        

        <section className="App">
            {goals.length > 0 ?( 
                <div className='goals'>
                    {goals.map((goal)=>(

                        <GoalItem key={goal._id} goal={goal} />

                    ))}

                    
                </div>
            ):(<h3>you have not set any goals </h3>)}
        </section>
        <Header style='App'/>
        </>
    )
}

export default Dashboard