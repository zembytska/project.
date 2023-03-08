// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом



        // ==========================


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


    // const json = localStorage.getItem('sessions');
    // const sessions = json ? JSON.parse(json) : [];
    //
    // for (const session of sessions) {
    // const wrapper = document.createElement('div');
    // const date = document.createElement('div');
    // const time = document.createElement('div');
    // const device = document.createElement('div');
    //
    // wrapper.classList.add('wrapper', 'item');
    //
    // const dateObj = format(session.date);
    //
    // date.innerText = `Date: ${dateObj.DD}/${dateObj.MM}/${dateObj.YYYY}`;
    // time.innerText = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;
    // device.innerText = `Device: ${session.appCodeName} / ${session.appVersion}`
    //
    // wrapper.append(date, time, device);
    // document.body.appendChild(wrapper);
// }
//
//     function format(dateString) {
//     const qwe = new Date(dateString);
//
//     const YYYY = qwe.getFullYear().toString();
//     const MM = (qwe.getMonth() + 1).toString();
//     const DD = qwe.getDate().toString();
//     const hh = qwe.getHours().toString();
//     const mm = qwe.getMinutes().toString();
//     const ss = qwe.getSeconds().toString();
//
//     return {
//     YYYY: YYYY,
//     MM: MM.length < 2 ? `0${MM}` : MM,
//     DD: DD.length < 2 ? `0${DD}` : DD,
//     hh: hh.length < 2 ? `0${hh}` : hh,
//     mm: mm.length < 2 ? `0${mm}` : mm,
//     ss: ss.length < 2 ? `0${ss}` : ss,
// }
// }
// const json = localStorage.getItem('sessions');
// const sessions = json ? JSON.parse(json) : [];
//
// sessions.push({
//     date: new Date().toISOString(),
//     appCodeName: navigator.appCodeName,
//     appVersion: navigator.appVersion,
// });
//
// localStorage.setItem('sessions', JSON.stringify(sessions));
//
//
//
//
//