import "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { alertStyle, cardStyle, cardTitleStyle, dashboardStyle, gridStyle, noAlertStyle } from "./monitoring-dashboards-charts-styles";

export default function MonitoringDashboardCharts() {

    const [cpuData, setCpuData] = useState<number[]>([])
    const [memoryData, setMemoryData] = useState<number[]>([])
    const [alerts, setAlerts] = useState<string[]>([])


    useEffect(() => {
        const interval = setInterval(() => {
            const newCpuUsage = Math.floor(Math.random() * 100)
            const newMemoryUsage = Math.floor(Math.random() * 100)

            setCpuData((prevData) => [...prevData, newCpuUsage].slice(-10))
            setMemoryData((prevData) =>
                [...prevData, newMemoryUsage].slice(-10)
            )

            const newAlerts = []
            if (newCpuUsage > 80) {
                newAlerts.push("Uso de CPU acima de 80%")
            }
            if (newMemoryUsage > 80) {
                newAlerts.push("Uso de Memória acima de 80%")
            }
            setAlerts(newAlerts)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const cpuChartData = {
        labels: Array.from({ length: cpuData.length }, (_, i) => i + 1),
        datasets: [
            {
                label: "Uso de CPU (%)",
                data: cpuData,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    }

    const memoryChartData = {
        labels: Array.from({ length: memoryData.length }, (_, i) => i + 1),
        datasets: [
            {
                label: "Uso de Memória (%)",
                data: memoryData,
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                fill: true,
            },
        ],
    }

    return (
        <div style={dashboardStyle}>
            <div style={gridStyle}>
                <div style={cardStyle}>
                    <h2 style={cardTitleStyle}>Uso de CPU</h2>
                    <Line data={cpuChartData} />
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitleStyle}>Uso de Memória</h2>
                    <Line data={memoryChartData} />
                </div>
                <div style={cardStyle}>
                    <h2 style={cardTitleStyle}>Notificações</h2>
                    {alerts.length > 0 ? (
                        alerts.map((alert, index) => (
                            <div key={index} style={alertStyle}>
                                {alert}
                            </div>
                        ))
                    ) : (
                        <p style={noAlertStyle}>Sem alertas críticos</p>
                    )}
                </div>
            </div>
        </div>
    )
}



