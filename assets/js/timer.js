// Script para gerenciar o cronômetro de relacionamento

function initializeTimer(startDate) {
    // Elementos do cronômetro
    const yearsEl = document.getElementById('years');
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    // Converter string de data para objeto Date
    const startDateTime = new Date(startDate);
    
    // Valores anteriores para detectar mudanças
    let prevValues = {
        years: -1,
        months: -1,
        days: -1,
        hours: -1,
        minutes: -1,
        seconds: -1
    };
    
    // Função para calcular e atualizar o tempo
    function updateTimer() {
        const now = new Date();
        const diff = calculateTimeDifference(startDateTime, now);
        
        // Atualizar elementos na interface
        if (diff.years !== prevValues.years) {
            yearsEl.textContent = diff.years;
            yearsEl.classList.add('highlight');
            setTimeout(() => yearsEl.classList.remove('highlight'), 1000);
            prevValues.years = diff.years;
        }
        
        if (diff.months !== prevValues.months) {
            monthsEl.textContent = diff.months;
            monthsEl.classList.add('highlight');
            setTimeout(() => monthsEl.classList.remove('highlight'), 1000);
            prevValues.months = diff.months;
        }
        
        if (diff.days !== prevValues.days) {
            daysEl.textContent = diff.days;
            daysEl.classList.add('highlight');
            setTimeout(() => daysEl.classList.remove('highlight'), 1000);
            prevValues.days = diff.days;
        }
        
        if (diff.hours !== prevValues.hours) {
            hoursEl.textContent = diff.hours;
            hoursEl.classList.add('highlight');
            setTimeout(() => hoursEl.classList.remove('highlight'), 1000);
            prevValues.hours = diff.hours;
        }
        
        if (diff.minutes !== prevValues.minutes) {
            minutesEl.textContent = diff.minutes;
            minutesEl.classList.add('highlight');
            setTimeout(() => minutesEl.classList.remove('highlight'), 1000);
            prevValues.minutes = diff.minutes;
        }
        
        if (diff.seconds !== prevValues.seconds) {
            secondsEl.textContent = diff.seconds;
            secondsEl.classList.add('highlight');
            setTimeout(() => secondsEl.classList.remove('highlight'), 1000);
            prevValues.seconds = diff.seconds;
        }
    }
    
    // Calcular diferença de tempo entre duas datas
    function calculateTimeDifference(startDate, currentDate) {
        // Clonar as datas para não modificar os originais
        const start = new Date(startDate);
        const current = new Date(currentDate);
        
        // Calcular anos
        let years = current.getFullYear() - start.getFullYear();
        
        // Ajustar mês e dia para cálculo correto
        let months = current.getMonth() - start.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Calcular dias
        let days = current.getDate() - start.getDate();
        if (days < 0) {
            // Pegar o último dia do mês anterior
            const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
            days += lastMonth.getDate();
            months--;
            if (months < 0) {
                years--;
                months += 12;
            }
        }
        
        // Calcular horas, minutos e segundos
        let hours = current.getHours() - start.getHours();
        if (hours < 0) {
            hours += 24;
            days--;
        }
        
        let minutes = current.getMinutes() - start.getMinutes();
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        
        let seconds = current.getSeconds() - start.getSeconds();
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        
        // Garantir que não haja valores negativos
        if (days < 0) days = 0;
        if (hours < 0) hours = 0;
        if (minutes < 0) minutes = 0;
        
        return {
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        };
    }
    
    // Atualizar o cronômetro imediatamente
    updateTimer();
    
    // Atualizar o cronômetro a cada segundo
    setInterval(updateTimer, 1000);
}
