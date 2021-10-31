import {FC, useEffect, useState} from "react";
import EventCalendar from "../components/EventCalendar";
import {Row, Button, Modal} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hook/useActions";
import {useTypedSelector} from "../hook/UseTypeSelector";
import {IEvent} from "../models/IEvent";


const Event: FC = ()=> {
    const [modalVisible, setModalVisible] = useState(false);
    const {guests,events} = useTypedSelector(state=>state.event)
 const {fetchGuests,createEvent,fetchEvents} = useActions()
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username);
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    return <div>

       <EventCalendar events={events}/>
        <Row justify={"center"}>
            <Button
                onClick={() => setModalVisible(true)}
            >Добавить событие</Button>
        </Row>
        <Modal
            title="Добавить событие"
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
        >
         <EventForm guests={guests} submit={addNewEvent}/>
        </Modal>
    </div>
}

export default Event