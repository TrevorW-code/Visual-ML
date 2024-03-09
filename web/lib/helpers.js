export function floatToHex(value) {
	// courtesy of GPT :3
	// Ensure the input value is within the valid range [0, 1]
	value = Math.min(1, Math.max(0, value));

	// Interpolate between white (#FFFFFF) and black (#000000)
	var red = Math.round((1 - value) * 255);
	var green = Math.round((1 - value) * 255);
	var blue = Math.round((1 - value) * 255);

	// Convert RGB values to hexadecimal format
	var redHex = red.toString(16).padStart(2, '0');
	var greenHex = green.toString(16).padStart(2, '0');
	var blueHex = blue.toString(16).padStart(2, '0');

	// Return the color as a hexadecimal string
	return '#' + redHex + greenHex + blueHex;
}
