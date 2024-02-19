import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebTokens2Service {

  constructor() { }

  connect(id: number){
    const info : any = []
    const socket = io('http://localhost:8080', {
          withCredentials: true,
          extraHeaders: {
            "my-custom-header": "abcd"
          } 
        }
        )

        socket.emit('Id/Cedula', id)

        socket.on('Id/Cedula', (msg)=>{
          info.push(msg)
        })

        return info
  }

  chatmessage(){
    const info : any[] = []

    const socket = io('http://localhost:8080', {
          withCredentials: true,
          extraHeaders: {
            "my-custom-header": "abcd"
          } 
        }
        )

        socket.on('Id/Cedula', (msg)=>{
          info.push(msg)
        })

        return info
  }
}
