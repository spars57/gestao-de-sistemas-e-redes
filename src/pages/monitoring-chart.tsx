import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";

// Registar os componentes padrão do Chart.js
Chart.register(...registerables);

export default function MonitoringChart() {
    // Referência para o canvas do gráfico
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null); // Referência para o gráfico

    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");

        // Destruir o gráfico anterior se já existir
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Criar o gráfico
        chartRef.current = new Chart(ctx!, {
            type: "line", // Pode ser 'bar', 'line', 'pie', etc.
            data: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
                datasets: [
                    {
                        label: "Uso da CPU",
                        data: [10, 20, 15, 30, 25],
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                },
            },
        });

        // Limpeza ao desmontar o componente ou antes de criar um novo gráfico
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <canvas ref={canvasRef} width="400" height="200" />
        </div>
    );
}
