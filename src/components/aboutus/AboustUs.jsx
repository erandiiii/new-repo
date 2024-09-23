import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.scss';
import { models } from '../Data';
import Carousel from 'react-elastic-carousel';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';





const AboustUs = () => {


    const breakPoints = [

        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 },
    ];

    return (
        <div className='au-container'>
            <div className="au-text">
                <h1>ABOUT US</h1>
                <p>ModelKos is the leading interactive fashion database
                    connecting the world to models, creative talent, magazines,
                    and luxury and commercial brands. With 1.1 million unique
                    visits per month, the site stands as an essential tool to
                    attribute credit and source new talent.</p>
            </div>
            <div className="au-right">
            <Link>
                    <svg className='svg-ja' xmlns="http://www.w3.org/2000/svg" width="250px" height="250px" viewBox="0 0 500.48 500.629" >
                        <path id="MODELKOS_-_AGENCY_-_MODELING_-_ACADEMY-_" data-name="MODELKOS - AGENCY - MODELING - ACADEMY- " d="M1285.954,1436.839c9.581-2.491,8.986-16.662,7.146-27.277l16.489,21.135,3.75-.974-8.288-31.9-.271.069,8.076,31.091-2.038-2.655-19.5-24.937-.453.116c2.138,8.223,6.3,27.212-1.754,33.353l-8.008-30.819-3.435.892Zm-22.786,1.732a16.648,16.648,0,0,0,11.055-20.7,16.5,16.5,0,1,0-11.055,20.7Zm-.06-.371c-7.947,2.517-14.739-4.676-16.9-11.8-2.064-7.029-.4-16.946,7.508-19.273,7.813-2.375,14.653,4.866,16.765,11.848C1272.637,1426.051,1270.969,1435.873,1263.108,1438.2Zm-35.65-33.836a16.482,16.482,0,1,0-5.87,32.436l10.473,1.9,5.87-32.436Zm1.077,33.362-6.891-1.25c-7.029-1.271-11.383-9.46-9.792-18.235s8.512-14.783,15.541-13.511l6.891,1.25Zm-31.242-18.049c.629-5.637-4.723-7.305-6.206-11.132l-1.271,3.461c6,2.207,8.619,4.564,6.417,10.568l-2.612,7.1-3.594-1.323c-5.344-1.965-7.542-3.021-9.559-7.141l-1.289,3.5,17.7,6.508,11.369-30.94-17.442-6.409-3.391,6.116c3.206-3.849,6.111-4.719,9.925-3.319l7.4,2.724Zm-31.138-30.983c3.784-3.3,6.745-3.754,10.266-1.823l6.921,3.792-15.67,28.578,3.275,1.8,15.847-28.906-16.334-8.956Zm-19.506-.565c-8.257-6.641,11.163-14.029-2.077-24.682l-.237.293c2.547,2.047,1.6,5.835.444,10.18-1.4,5.167-3.457,10.4,1.637,14.5a5.271,5.271,0,0,0,3.943,1.129c-4.383,1.87-8.968,2.736-14.411,3.689-.108-.086-5.258.5-8.215-1.034l6.039,4.857c-.781-2.9,6.421-4.18,6.421-4.18,7.542-1.483,13.52-3.327,19.808-9.357l-16.912,21.028,2.763,2.224,20.657-25.686-2.763-2.224a35.31,35.31,0,0,1-11.3,9.662A5.4,5.4,0,0,1,1146.649,1388.129Zm-32.133-9.818a16.644,16.644,0,0,0,23.022-4.56,16.5,16.5,0,1,0-23.022,4.56Zm.25-.28c-6.982-4.556-5.719-14.365-1.582-20.545,4.134-6.051,12.861-11.046,19.67-6.4,6.788,4.542,5.517,14.416,1.453,20.471C1130.2,1377.708,1121.545,1382.639,1114.765,1378.032Zm-13.326-28.376c4.607-2.655,4.465-8.232,3.913-13.679-1.108-11.921,2.638-15.05,6.4-13.662,7.223,2.625,8.93,13.714,1.185,23.458l5.62-3.241c3.228-7.952-.491-18.149-6.672-20.73a7.216,7.216,0,0,0-6.409.569c-4.771,2.754-4.65,8.287-4.008,13.8,1.078,12.524-3.185,15.416-7.068,13.451-4.732-2.228-8.369-9.943-2.435-18.808l-4.245,2.448C1084.11,1339.981,1092.419,1354.858,1101.44,1349.656Zm-11.451-41.447,2.142-.655-3.793-12.413-2.146.655Zm7.473-56.014-.246-3.917-32.026,16,.021.328a147.8,147.8,0,0,0,21.8,8.874,33.259,33.259,0,0,0,7.766,1.521c2.112.1,3.478-.5,3.957-1.789a1.176,1.176,0,0,0,.28-.767c-.039-2.1-1.81-2.788-4.2-3.526-3.5-1.28-8.408-2.792-9.654-10.667Zm-12.615,6.219c1.3,8.012,6.3,9.568,9.9,10.886,2.189.608,3.866,1.254,3.844,3.125a2.64,2.64,0,0,0-.19.668c-.306,1.142-1.728,1.56-3.646,1.586a33.41,33.41,0,0,1-7.671-1.53,157.523,157.523,0,0,1-17.743-6.883Zm11.692-35.93a10.408,10.408,0,0,1,2.306,5.292c1.245,7.99-6.861,13.921-14.171,14.964-7.258,1-16.76-2.2-18.036-10.339-1.607-10.146,9.443-13.908,10.029-14.076l-4.827-.552s-7.189,4.108-5.53,14.636a16.587,16.587,0,0,0,18.877,14.054c9.089-1.4,15.464-9.835,13.9-18.756a15.443,15.443,0,0,0-4.37-9l-9.7-1.112-2.03,17.717,3.573.409c-2.638-3.637-2.224-8.9-1.573-14.563Zm-15.024-16.123c5.663.3,7.021-5.142,10.757-6.84l-3.53-1.069c-1.858,6.12-4.055,8.869-10.179,7.012l-7.236-2.193,1.112-3.663c1.65-5.452,2.577-7.706,6.576-9.956l-3.573-1.086-5.473,18.054,31.548,9.563,5.392-17.787-6.3-3.03c4.025,2.974,5.064,5.827,3.883,9.714l-2.289,7.551Zm-2.814-26.673,29.578,14.545,1.548-3.146-29.29-14.4c2.224-4.525,7.266-6.206,13.279-6.374,7.6-.112,16.743,2.456,23.406,5.732l1.543-3.142-29.578-14.546-1.547,3.146,24.053,11.822c-5.715-2.026-12.179-3.487-17.959-3.262-6.055.043-11.244,1.913-13.49,6.482Zm23.54-39.017c3.887-9.831,15.834-7.029,15.834-7.029l-3.866-2.939s-8.253-.172-12.283,9.843a16.677,16.677,0,0,0,9.119,21.644c8.59,3.358,18.231-.457,21.579-9.111a16.041,16.041,0,0,0,.81-9.942l-4.723-3.586c3.62,3.573,5.693,8.486,3.672,13.459-3.09,7.62-13.033,8.512-19.907,5.754C1105.754,1155.884,1099.16,1148.355,1102.241,1140.67Zm33.3-32.724c-.323-.845-.168-3.314.668-4.2l-3.909,3.538a1.833,1.833,0,0,1,2.982,1.207l4.323,16.243-6.417-1.935-13.447-4.133-3.116,2.819,21.295,6.538,9.309,10.279,2.737-2.478-9.968-11Zm28.311-3.612,1.082,1.961,11.365-6.267-1.082-1.961Zm53.183-37.439c-9.555,2.577-8.826,16.748-6.882,27.346l-16.692-20.98-3.741,1.008,8.59,31.823.271-.073-8.374-31.013,2.069,2.637,19.739,24.751.448-.121c-2.211-8.206-6.555-27.152,1.439-33.375l8.3,30.746,3.426-.927Zm22.786-1.948a16.645,16.645,0,0,0-10.861,20.808,16.5,16.5,0,1,0,10.861-20.808Zm.065.371c7.926-2.59,14.783,4.538,17.01,11.637,2.129,7.012.556,16.941-7.331,19.346-7.792,2.444-14.7-4.732-16.873-11.692C1230.47,1077.558,1232.047,1067.719,1239.887,1065.318Zm35.961,33.5a16.483,16.483,0,1,0,5.564-32.492l-10.494-1.8-5.564,32.491Zm-1.4-33.349,6.9,1.181c7.038,1.207,11.472,9.352,9.964,18.144s-8.37,14.86-15.412,13.654l-6.9-1.181Zm31.4,17.748c-.573,5.642,4.8,7.262,6.314,11.076l1.237-3.474c-6.025-2.151-8.662-4.482-6.512-10.508l2.539-7.124,3.607,1.289c5.366,1.914,7.572,2.948,9.628,7.055l1.259-3.521-17.77-6.335-11.076,31.043,17.5,6.245,3.336-6.146c-3.167,3.875-6.068,4.775-9.9,3.409l-7.43-2.651Zm31.431,30.686c-3.75,3.34-6.706,3.823-10.244,1.922l-6.956-3.723,15.394-28.725-3.293-1.767-15.571,29.052,16.42,8.8Zm-.659,8.111,2.913,1.944,18.3-27.419-2.913-1.944Zm27.04-21.794-21.17,25.264,2.685,2.25,20.958-25.014c3.866,3.237,4.3,8.533,3.03,14.412-1.7,7.408-6.374,15.675-11.141,21.368l2.685,2.245,21.17-25.264-2.685-2.25-17.213,20.54c3.332-5.064,6.288-10.994,7.448-16.661,1.4-5.892.819-11.373-3.081-14.645Zm18.519,60.492a10.426,10.426,0,0,1-5.4-2.056c-6.585-4.7-5.154-14.64-.784-20.592,4.362-5.887,13.3-10.438,20.006-5.659,8.374,5.947,3.332,16.48,3.043,17.015l3.771-3.064s2.095-8.012-6.589-14.192a16.6,16.6,0,0,0-23.252,3.659c-5.357,7.477-3.784,17.929,3.681,23.053a15.458,15.458,0,0,0,9.494,3.176l7.577-6.15-11.24-13.847-2.793,2.267c4.448.659,7.917,4.637,11.507,9.059Zm22.894,12.024-2.03.957,5.53,11.744,2.03-.957Zm.586,56.514.8,3.84,29.427-20.381-.064-.319a147.836,147.836,0,0,0-22.833-5.7,33.464,33.464,0,0,0-7.908-.4c-2.1.2-3.37.987-3.663,2.336a1.17,1.17,0,0,0-.168.8c.336,2.077,2.189,2.5,4.655,2.9,3.642.767,8.723,1.573,11.072,9.188Zm11.606-7.947c-2.422-7.745-7.6-8.576-11.343-9.374-2.254-.293-4.008-.69-4.25-2.548a2.683,2.683,0,0,0,.095-.689c.137-1.172,1.487-1.789,3.383-2.086a33.453,33.453,0,0,1,7.813.427,157.792,157.792,0,0,1,18.536,4.3Zm21.674,23.135c3.116,10.1-7.951,15.39-7.951,15.39l4.853-.129s6.546-5.029,3.426-15.36a16.685,16.685,0,0,0-20.661-11.179c-8.8,2.754-13.933,11.761-11.132,20.609a16,16,0,0,0,5.59,8.262l5.926-.155c-5.059-.522-9.749-3.06-11.287-8.206-2.353-7.878,4.844-14.791,11.934-16.942C1426.69,1234.77,1436.542,1236.52,1438.947,1244.441Zm-35.909,43.434-.677,3.862,34.879-8.051.056-.319a147.7,147.7,0,0,0-19.11-13.739,33.429,33.429,0,0,0-7.193-3.3c-2.03-.59-3.5-.327-4.267.815a1.177,1.177,0,0,0-.452.681c-.457,2.052,1.108,3.133,3.254,4.414,3.1,2.06,7.521,4.684,6.887,12.632Zm13.722-3.09c.617-8.094-3.891-10.779-7.072-12.9-1.987-1.107-3.469-2.125-3.008-3.939a2.7,2.7,0,0,0,.345-.6c.56-1.043,2.043-1.112,3.913-.689a33.421,33.421,0,0,1,7.1,3.284,157.642,157.642,0,0,1,15.632,10.852Zm-19.127,20.114a16.482,16.482,0,1,0,30.738,11.908l3.844-9.926-30.737-11.912Zm32.962,5.258-2.53,6.529c-2.581,6.663-11.446,9.386-19.76,6.163s-12.9-11.154-10.322-17.817l2.53-6.529Zm-23.631,27.246c-5.422-1.681-8.073,3.262-12.111,3.991l3.164,1.905c3.3-5.482,6.106-7.6,11.584-4.3l6.478,3.9-1.974,3.28c-2.94,4.879-4.4,6.84-8.822,8.042l3.2,1.927,9.736-16.157-28.233-17.015-9.594,15.92,5.366,4.486c-3.172-3.875-3.478-6.9-1.384-10.374l4.073-6.758Zm-22.566,48.308c6.512-7.456-1.969-18.825-9.473-26.557l25.536,8.167,2.547-2.922-24.824-21.678-.186.211,24.2,21.126-3.18-1.043-30.165-9.607-.31.354c6.4,5.585,20.54,18.924,17.352,28.539l-23.984-20.946-2.332,2.672Zm-27.134,18.691c.254.866-.1,3.319-1,4.133l4.18-3.219a1.832,1.832,0,0,1-2.875-1.44l-3.008-16.536,6.241,2.444,13.075,5.193,3.327-2.56-20.7-8.223-8.456-10.985-2.922,2.25,9.055,11.766Zm-15.839-5.654-1.09-1.957-11.344,6.31,1.091,1.957Z" transform="translate(-478.631 -1375.193) rotate(21)" fill="#111" fill-rule="evenodd" opacity="1" />
                        <text font-size="32" >
                        </text>
                    </svg>
                    <HiOutlineArrowLongRight className='arrow-icon'
                        color='gray'
                        fontSize={55}
                    />
                </Link>
                <Carousel className='divi'
                    pagination={true}
                    breakPoints={breakPoints}

                >
                    {models.map((model) => (
                        <div key={model.id} className={`cardss card-${model.id}`}>
                            <div className="card-image">
                                <img className='imgja' src={model.image} alt={model.name} />
                            </div>
                            <div className="card-details">
                                <h3>{model.name}</h3>
                                <div className='real-p'>
                                    <p className='category-item'>{model.category[0]}</p>
                                    <p className='category-item'>{model.category[1]}</p>
                                    <p className='category-item'>{model.category[2]}</p>
                                </div>
                                <p className='date'>{model.date}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>




    )
}

export default AboustUs