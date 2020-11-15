import React, { useContext, useEffect, useState } from 'react';
import { MailContext } from '../../../context/MailContext';
import axios from 'axios'

import './Mail.css'
export default function Mail() {
    const [mail, setMail] = useContext(MailContext);
    return (
        <div className="mailContainer">
                {mail.map((details, i) => {
                    return (
                        <div className="mailTable">
                            <h3>{details.email}</h3>
                            <th>
                            <h2>{details.sujet}</h2>
                            <tr>{details.name}</tr>
                            <tr>{details.date}</tr>
                            </th>
                            <th>{details.content}</th>
                        </div>
                    )
                })}
        </div>
    )
}