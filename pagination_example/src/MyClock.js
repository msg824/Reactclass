import React from 'react';

class MyClock extends React.Component {
	constructor(props){
		super(props)
		this.state = {
 			time: new Date(),
            stopList: [],
            overIdx: null
		}
 	}

	componentDidMount(){
		this.interval = setInterval(()=>{
 			this.setState({
 				time: new Date()
 			})
 		}, 100)
	}
 
	formatSet(data){
		return data < 10 ? '0' + data : data;
	}
    
    milliSecondSet(data) {
    	return data < 100 ? (data < 10 ? '00' + data : '0' + data ) : data
    }
    
    stopEventListener() {
    	// const { stopList } = this.state;
        // stopList.push(this.state.time);
    	this.setState({
        	stopList: this.state.stopList.concat(this.state.time)
        }, () => {
        	console.log(this.state.stopList);
        })
    }
    
    deleteEventListener(idx) {
    	const { stopList } = this.state;
        stopList.splice(idx, 1);
        this.setState({
        	stopList
        })
    }

	render() {
		const { time, stopList } = this.state;
        const { color } = this.props;
		const h = this.formatSet(time.getHours());
		const m = this.formatSet(time.getMinutes());
		const s = this.formatSet(time.getSeconds());
        const milliSecond = this.milliSecondSet(time.getMilliseconds());
        const year = this.formatSet(time.getFullYear());
        const month = this.formatSet(time.getMonth()+1);
        const date = this.formatSet(time.getDate());

		return (
			<div className="clockBox" style={{color}}>
                <h3>{year}년 {month}월 {date}일</h3>
                <h1 className="nowTime">{h}:{m}:{s}:{milliSecond}</h1>
                <ul>
                    {
                    	stopList.map((data, i) => {
                        	return <li key={i} className="stopList-li"
                                    onMouseOver={()=>this.setState({overIdx: i})}
                                    onMouseOut={()=>this.setState({overIdx: null})}
                                >
                                {data.getSeconds()}
                                <span>:</span>
                                {data.getMilliseconds()}
                                {
                                	this.state.overIdx === i ? <span className="deleteBtn" onClick={this.deleteEventListener.bind(this, i)}>X</span> : null
                                }
                                
                            </li>
                        })
                    }
                </ul>
                <div className="stopBtn" onClick={this.stopEventListener.bind(this)}>STOP</div>
            </div>
		)
	}
}

export default MyClock;