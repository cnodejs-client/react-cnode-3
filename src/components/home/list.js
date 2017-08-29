import React, { Component } from 'react';
import { k, startTimeOf } from '../../functions';
import { Link } from 'react-router-dom';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    shouldComponentUpdate(nextProps, nextState) {
        const ndata = nextProps.data;
        const tdata = this.props.data;
        if (ndata.length === tdata.length) {
            for (let i in ndata) {
                if (ndata[i].id !== tdata[i].id) return true;
            }
            return false;
        }
        return true;
    }

    render() {
        const { data = []} = this.props;

        return (
            <div className='list-container'>
                <ul>{
                    data.map((item, index) => (
                        <li key={`list-${index}`} className='list-item'>
                            <div className='author'>
                                <img src={item.author.avatar_url} className='avatar' alt='' />
                                <span className='name'>{item.author.loginname}</span>
                            </div>
                            <div className='content'>
                                <Link className='title' to={`/article/${item.id}`}>{item.title}</Link>
                                <span className='time'>
                                    {startTimeOf(item.last_reply_at)}
                                    <span>, reply: {k(item.reply_count)}</span>
                                    <span>, visit: {k(item.visit_count)}</span>
                                </span>
                            </div>
                            <div className='news'>
                                <div className='reply'>
                                    <span>{k(item.reply_count)}</span>
                                    <span className='text'>回复</span>
                                </div>

                                <div className='visit'>
                                    <span>{k(item.visit_count)}</span>
                                    <span className='text'>浏览</span>
                                </div>
                            </div>
                        </li>
                    ))
                }</ul>
            </div>
        );
    }
}