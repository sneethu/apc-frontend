import io from 'socket.io-client';
import EventEmitter from 'eventemitter3';

export const eventEmitter = new EventEmitter();

export const NEW_MEETING = 'NEW_MEETING';
export const UPDATE_MEETINGS = 'UPDATE_MEETINGS';

const sockets = {}

export const Websocket = (room) => {
    sockets[room] = io();
    const eventEmitter = new EventEmitter();
    sockets[room].on('connect', function() {
        sockets[room].emit('room', room);
        sockets[room].on('event', function(data){
            console.log('meeting '+data);
            eventEmitter.emit(data.type,data.meeting);
        });
     });
    return {
        eventEmitter,
        send: function(type,data) {
            sockets[room].emit(type,data);
        }
    };
}