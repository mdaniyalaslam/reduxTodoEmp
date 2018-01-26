// import React, { Component } from 'react';

// import ActionTypes from '../constant/constant';

export default class ActionTypes {
    // static INCREMENT='INCREMENT';
    // static DECREMENT='DECREMENT';
    // static ADD='ADD';
    static USERNAME = "USERNAME";
   
    
    
    static changeName() {
        return {
            type: "USERNAME", 
            payload:'new'
        };
        
    }
} 
    // export default ActionTypes;