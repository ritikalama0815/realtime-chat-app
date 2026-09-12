// imports required for server
import { uniqueNamesGenerator, colors, names } from "unique-names-generator";
import express from "express";
import http from "http";

// import the socket.io library
import { Server } from "socket.io";

// initializing the servers: HTTP as well as Web Socket
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const chatHistory = [];

/*  Receive connedction requests from users
connection: type of event occuring; callback: executed whe
connection event occurs
*/
io.on("connection", function callback(socket){
  console.log("connection ok")
  const username = getUniqueUsername();
  console.log(`${username} connected`)

  socket.on("disconnect", function(){
    console.log(`${username} disconnected`)
  })
})