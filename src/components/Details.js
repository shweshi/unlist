import React, { Component } from 'react'
import About from './About';
import Footer from './Footer';
import Table from './Table';
import Json from './Json';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.location.state.list,
            about: this.props.location.state.about
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onDownloadJson(filename, url) {
        const arrayOfJson = require('../' + url);
        // Create link and download
        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/json;charset=utf-8,%EF%BB%BF' + encodeURIComponent(JSON.stringify(arrayOfJson, null, 4)));
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    onDownloadCsv(filename, url) {
        const arrayOfJson = require('../' + url);
        const replacer = (key, value) => value === null ? '' : value
        const header = Object.keys(arrayOfJson[0])
        let csv = arrayOfJson.map(row => header.map(fieldName =>
            JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(header.join(','))
        csv = csv.join('\r\n')

        // Create link and download
        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv));
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <div>
                <About about={this.state.about} />
                <div className="details-title">
                    <span>JSON</span>
                    <p className="download">Download full <a style={{ cursor: 'pointer' }} onClick={() => this.onDownloadJson(this.state.about.title + '.json', this.state.list.url)} className="downloadLink">{this.state.about.title}.json</a></p>
                    <Json url={this.state.list.url} />
                    <span>CSV</span>
                    <p className="download">Download full <a style={{ cursor: 'pointer' }} onClick={() => this.onDownloadCsv(this.state.about.title + '.csv', this.state.list.url)} className="downloadLink">{this.state.about.title}.csv</a></p>
                    <Table url={this.state.list.url} />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Details