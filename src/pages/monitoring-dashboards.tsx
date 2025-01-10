
import { useEffect, useState } from "react"
import { alertStyle, cardStyle, cardTitleStyle, dashboardStyle, gridStyle, noAlertStyle, progressStyle, titleStyle } from "./monitoring-dashboards-styles"

/**
 * Protótipo de Website de Monitorização
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function MonitoringDashboard() {
    const [cpuUsage, setCpuUsage] = useState(50)
    const [memoryUsage, setMemoryUsage] = useState(40)
    const [alerts, setAlerts] = useState<string[]>([])

    // Simula a atualização dos dados de CPU e memória
    useEffect(() => {
        const interval = setInterval(() => {
            const newCpuUsage = Math.floor(Math.random() * 100)
            const newMemoryUsage = Math.floor(Math.random() * 100)
            setCpuUsage(newCpuUsage)
            setMemoryUsage(newMemoryUsage)

            // Adiciona alertas se os limites forem excedidos
            const newAlerts = []
            if (newCpuUsage > 80) {
                newAlerts.push("Uso de CPU acima de 80%")
            }
            if (newMemoryUsage > 80) {
                newAlerts.push("Uso de Memória acima de 80%")
            }
            setAlerts(newAlerts)
        }, 3000)

        return () => clearInterval(interval) // Limpa o intervalo ao desmontar
    }, [])

    return (
        <div style={dashboardStyle}>
            <h1 style={titleStyle}>Monitorização de Sistemas</h1>
            <div style={gridStyle}>
                {/* Gráfico de CPU */}
                <div style={cardStyle}>
                    <h2 style={cardTitleStyle}>Uso de CPU</h2>
                    <div
                        style={{
                            ...progressStyle,
                            backgroundColor: getProgressColor(cpuUsage),
                        }}
                    >
                        {cpuUsage}%
                    </div>
                </div>

                {/* Gráfico de Memória */}
                <div style={cardStyle}>
                    <h2 style={cardTitleStyle}>Uso de Memória</h2>
                    <div
                        style={{
                            ...progressStyle,
                            backgroundColor: getProgressColor(memoryUsage),
                        }}
                    >
                        {memoryUsage}%
                    </div>
                </div>

                {/* Notificações */}
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

// Função para obter a cor do progresso
function getProgressColor(percentage: number) {
    if (percentage > 80) return "#ff4d4d" // Vermelho
    if (percentage > 50) return "#ffd700" // Amarelo
    return "#4caf50" // Verde
}

