// src/components/Dashboard.js
import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, Hint, GridLines, } from 'react-vis';
import { VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import './Dashboard.css'; // Crie este arquivo CSS para aplicar o estilo
import '../../../../node_modules/react-vis/dist/style.css'

const Dashboard = () => {
    const data = [
        { x: 'Category 1', y: 10 },
        { x: 'Category 2', y: 5 },
        { x: 'Category 3', y: 15 },
        { x: 'Category 4', y: 7 },
    ];

    const data1 = [{ x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 }]

    const data2 = [{ x: 0, y: 10 },
        { x: 5, y: 2 },
        { x: 4, y: 1 }]

    const [hoveredValue, setHoveredValue] = React.useState(null);

    return (
        <div className="Dashboard">
            <div className="dashboard-card">
                <h1>Dashboard</h1>

                {/* Gráfico de barras */}
                <div className="chart-container">
                    <XYPlot height={300} width={400} xType="ordinal">
                        <VerticalBarSeries data={data} onValueMouseOver={(v) => setHoveredValue(v)} onValueMouseOut={() => setHoveredValue(null)} />
                        <XAxis />
                        <YAxis />
                        {hoveredValue && <Hint value={hoveredValue} />}
                    </XYPlot>
                </div>

                {/* Filtros */}
                <div className="filters-container">
                    <label>
                        Select Filter:
                        <select>
                            <option value="filter1">Filter 1</option>
                            <option value="filter2">Filter 2</option>
                            <option value="filter3">Filter 3</option>
                        </select>
                    </label>

                    <label>
                        Date Range:
                        <input type="date" />
                        <input type="date" />
                    </label>
                </div>
            </div>
            <div className='second-card'>
                <div className="second-graph-container">
                    <XYPlot width={300} height={300}>
                        <HorizontalGridLines style={{ stroke: 'rgba(255, 255, 255, 0.2)' }} />
                        <XAxis/>
                        <YAxis/>
                        <LineSeries data={data1}  color="yellow" />
                        <LineSeries data={data2} color="cyan" />

                    </XYPlot>
                </div>
            </div>

            <div className='third-card'>
                passa
            </div>
        </div>
    );
};

export default Dashboard;
