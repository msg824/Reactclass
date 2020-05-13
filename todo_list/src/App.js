import React from 'react';
import './App.css';
import { TextField, Typography, Paper } from '@material-ui/core';
import { KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null
        }

        this.onChangeData = this.onChangeData.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
    }

    onChangeData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeStartDate(e) {
        this.setState({
            startDate: moment(e._d).format('llll')
        })
    }

    onChangeEndDate(e) {
        this.setState({
            endDate: moment(e._d).format('llll')
        })
    }

    onChangeStartTime(e) {
        this.setState({
            startTime: moment(e._d).format('llll')
        })
    }

    onChangeEndTime(e) {
        this.setState({
            endTime: moment(e._d).format('llll')
        })
    }

    render() {
        const { title, content } = this.state;

        return (
            <div className="App">
                <div className="header">
                    TODO LIST
                </div>
                <Paper className="input_area" variant="outlined" style={{padding: '10px'}}>
                    <TextField label="제목" name="title" value={title} onChange={this.onChangeData} size="normal" margin="normal" fullWidth reqired />
                    <TextField label="상세내용" name="content" value={content} onChange={this.onChangeData} size="normal" margin="normal" fullWidth multiline />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/DD"
                        margin="normal"
                        label="시작 예정일"
                        onChange={this.onChangeStartDate}
                        style = {{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/DD"
                        margin="normal"
                        label="끝나는 예정일"
                        onChange={this.onChangeEndDate}
                        style = {{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        label="시작 시간"
                        variant="inline"
                        onChange={this.onChangeStartTime}
                        style = {{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        label="끝나는 시간"
                        variant="inline"
                        onChange={this.onChangeEndTime}
                        style = {{width: '50%'}}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Paper>
                <div className="list_area">
                    리스트 영역
                </div>
                <Typography variant="body2" color="textSecondary" align="center" >
                    {'Copyright ⓒ 김민성 ' + new Date().getFullYear()+'.'}
                </Typography>
            </div>
        );
    }
    
}

export default App;
