import React, { Component } from 'react';
import data from "/home/siva/Downloads/MDB-React-Free-npm/src/components/everything.json"; 

const socialMediaList = data.SocialMedias;

export class content extends Component {
	render() {
		return (
            <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
        );
    }
} 