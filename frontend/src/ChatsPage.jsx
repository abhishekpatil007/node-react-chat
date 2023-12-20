import { PrettyChatWindow } from 'react-chat-engine-pretty'


const ChatsPage = (props) => {

    return (
    <div style={{height: '100vh' }}>
        <PrettyChatWindow
            projectId='382ea058-d13b-489f-ac49-60e7d8603e32
            '
            username={props.user.username}
            secret={props.user.secret}
            style= {{height: '100%'}}
        />    
    </div>
    )
}

export default ChatsPage