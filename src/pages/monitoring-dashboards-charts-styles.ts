import { CSSProperties } from "react"

export const dashboardStyle: CSSProperties = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
}

export const titleStyle: CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
}

export const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
}

export const cardStyle: CSSProperties = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

export const cardTitleStyle: CSSProperties = {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#333333",
}

export const alertStyle: CSSProperties = {
    backgroundColor: "#ff4d4d",
    color: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    fontWeight: "bold",
}

export const noAlertStyle: CSSProperties = {
    color: "#777777",
    fontStyle: "italic",
}