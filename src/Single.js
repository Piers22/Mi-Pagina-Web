import React from 'react';
import './style.css'; 
import Constantino from './imagenes/9.png';
import Luis from './imagenes/10.jpg';
import Miguel from './imagenes/11.jpg';

const Single = () => {
  return (
    <div className="single">
      <div className="messages-header icons-header">
                <div className="icon-container">
                    <i className="fas fa-comments"></i>
                    <span>Mensajes</span>
                </div>
                <div className="icon-container">
                    <i className="fas fa-kiss-wink-heart"></i>
                    <span>Besos</span>
                </div>
                <div className="icon-container">
                    <i className="fas fa-star"></i>
                    <span>Favoritos</span>
                </div>
            </div>
            <div className="messages-list">
                <div className="message-item">
                    <img src={Constantino} alt="Constantino" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Constantino</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
                <div className="message-item">
                    <img src={Luis} alt="Luis" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Luis</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
                <div className="message-item">
                    <img src={Miguel} alt="Miguel" className="message-avatar"/>
                    <div className="message-text">
                        <span className="message-name">Miguel</span>
                        <span className="message-preview">Hola</span>
                    </div>
                </div>
            </div>
            <div className="blocked-accounts">
                <span>Cuentas bloqueadas</span>
            </div>
    </div>
  );
};

export default Single;