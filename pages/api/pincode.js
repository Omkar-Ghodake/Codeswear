export default function handler(req, res) {
	try {
		if (req.method === "POST") {
			const validPincodes = [411045, 411046, 411047, 414303, 414302]
			req.body.pincode = parseInt(req.body.pincode)
			if (validPincodes.includes(req.body.pincode)) {
				return res.json({ success: true })
			}
			return res.json({ success: false })
		}
		return res.status(400).json({ error: "Bad Request!" })
	} catch (error) {
		res.status(500).json({ success: false, error: "Internal Server Error" })
	}
}