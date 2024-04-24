import React from 'react';

function InfoAktualMini({ data }: { data: { image: string, title: string, time: string, views: number } }) {
    return (
        <div className='flex flex-col rounded-2xl justify-end min-w-[360px] drop-shadow-lg' style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '40vw', height: '30vh'}}>
            <div className='min-h-24 px-3 py-3 bg-white rounded-b-2xl flex flex-col gap-1'>
            <div className='flex flex-row gap-2'>
                <div className='bg-orange-light px-2 py-1 text-xs rounded-xl text-center flex flex-row gap-1 items-center'>
                <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"></path> <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#0F0F0F"></path> </g></svg>
                    <p>{data.time}</p>
                </div>
                <div className='bg-blue-dark px-2 py-1 text-xs rounded-xl text-center text-white flex flex-row gap-1 items-center'>
                <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="4" fill="#ffffff"></circle> <path d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12" stroke="#ffffff" stroke-width="2"></path> </g></svg>
                    <p>{data.views} Views</p>
                </div>
            </div>
            <h1 className='text-md font-bold text-blue-dark'>{data.title}</h1>
            </div>
        </div>
    );
}

export default InfoAktualMini;