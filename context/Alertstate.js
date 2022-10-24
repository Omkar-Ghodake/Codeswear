import { createContext, useState } from "react";

const AlertContext = createContext()

const AlertState = (props) => {

	const [alert, setAlert] = useState(null)

	return (
		<AlertContext.Provider value={ { alert, setAlert } }>
			{ props.children }
		</AlertContext.Provider>
	)
}

export default AlertState
export {
	AlertContext
}