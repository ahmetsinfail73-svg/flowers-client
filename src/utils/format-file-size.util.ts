export const formatFileSize = (bytes: number) => {
	if (bytes < 1024) return `${bytes} Б`

	if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} КБ`

	return `${(bytes / 1024 ** 2).toFixed(1)} МБ`
}
