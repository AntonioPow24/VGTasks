export const orderByDate = (tasks) => {
    return tasks.sort((a, b) => {
        // Convertir las fechas a objetos Date para comparar
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        // Comparar las fechas y devolver el resultado de la comparación
        return dateA - dateB;
    });
};