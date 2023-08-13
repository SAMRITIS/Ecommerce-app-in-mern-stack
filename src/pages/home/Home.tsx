import Header from '../../components/header';
import './Home.css'
import g from '../../assets/image/g.png';
import m from '../../assets/image/m.png';
import { Product } from './interface/product.interface';
import c from '../../assets/image/c.jpg';
import l from '../../assets/image/l.png';
import ccc from '../../assets/image/ccc.png';
import { Button } from '../../components/button';
import customer from '../../assets/image/customer.svg';
import cus from '../../assets/image/cus.svg';
export function Home () {
   
    const products: Product[] = [{
        id: 1,
        name: 'Coca Cola Cold drink',
        image: '',
    },
    {
        id: 2,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 3,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 4,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 5,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 6,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 7,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 8,
        name: 'Coca Cola Cold drink',
        image: '',
    },{
        id: 9,
        name: 'Coca Cola Cold drink',
        image: '',
    }]
    
    return (
        <div>
            <div className='h-screen main'>
            <div>
                <Header/>
                <svg  style={{ position: "absolute", marginLeft: 0 }} width="1900" height="1909" viewBox="0 0 1988 1909" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1987.29 952.401C1987.29 1539.62 1605.63 1908.95 996.156 1908.95C386.685 1908.95 0.247314 1539.62 0.247314 952.401C0.247314 365.184 386.685 0.530518 996.156 0.530518C1605.63 0.530518 1987.29 365.184 1987.29 952.401ZM0.247314 952.401C0.247314 1661.86 498.407 1908.95 996.156 1908.95C1493.9 1908.95 1987.29 1642.2 1987.29 952.401C1987.29 262.599 1493.9 0.530518 996.156 0.530518C306.306 0.530518 0.247314 472.827 0.247314 952.401Z" fill="#FFFF" fill-opacity="0.9"/>
                    </svg>

                                    <div className='mt-12 sec-dev'>
                                    <svg style={{ position: "absolute", marginLeft: 0 }} width="1900" height="1909" viewBox="0 0 1988 1909" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1987.29 952.401C1987.29 1539.62 1605.63 1908.95 996.156 1908.95C386.685 1908.95 0.247314 1539.62 0.247314 952.401C0.247314 365.184 386.685 0.530518 996.156 0.530518C1605.63 0.530518 1987.29 365.184 1987.29 952.401ZM0.247314 952.401C0.247314 1661.86 498.407 1908.95 996.156 1908.95C1493.9 1908.95 1987.29 1642.2 1987.29 952.401C1987.29 262.599 1493.9 0.530518 996.156 0.530518C306.306 0.530518 0.247314 472.827 0.247314 952.401Z" fill="#FBB80D" fill-opacity="0.9"/>
                    </svg>

                    <div className='flex flex-column justify-center space-x-8 text-white'>
                        <div className='mt-12'>
                            <p style={{fontSize: 50 }} >
                                Buy your groceries and <br/>
                                have it delivered <br/>
                                to your doorstep with <br/>
                                ease.
                            </p>
                        </div>
                        <div className='m-12'>
                            <img src={g} alt="" className="h-[500px] w-[760px]"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='h-screen mt-12'>
                <div className='flex flex-row space-x-12 justify-content overflow-y-auto overflow-x-hidden'>
                    <div>
                        <svg style={{ position: 'absolute', marginLeft: 100, }} className='mt-3' width="1200" height="800" viewBox="0 0 2098 1233" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_70)">
                            <path d="M23.9121 1200.41L1699.52 741.764C1707.55 739.566 1714.26 734.057 1717.99 726.612L2073.98 14.6216L1266.83 1187.72C1261.37 1195.67 1252.34 1200.41 1242.7 1200.41H23.9121Z" fill="url(#paint0_linear_2_70)"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_70" x="0.864677" y="0.793122" width="2096.16" height="1231.89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="9.21897"/>
                            <feGaussianBlur stdDeviation="11.5237"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_70"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_70" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_2_70" x1="917" y1="-34.9304" x2="917" y2="1200.41" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFB800"/>
                            <stop offset="1" stop-color="#289402"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <img src={m} alt="Man" style={{ height: 750, width: 800, position: 'absolute', marginLeft: 100  }}/>
                        <p style={{ marginLeft: 700, fontSize: 50, fontWeight: 800 }}>Why we are the <br/> best ?</p>
                    </div>
                    <div style={{ marginTop: 300, marginLeft: 200 }}>
                       <div className='flex flex-col text-xl'>
                          <div className='mt-8 shadow-lg shadow-yellow'>
                           
                            <p className='p-7' >We serve you the best of <br/> fresh, nutrient-rich and <br /> healthy groceries</p>
                          </div>
                          <div className='mt-8 shadow-lg shadow-yellow'>
                            <p className='p-7' >Swift Delivery</p>
                          </div>
                          <div className='mt-8 shadow-lg shadow-yellow'>
                            <p className='p-7' >Great Refund Policy</p>
                          </div>
                          <div className='mt-8 shadow-lg shadow-yellow'>
                            <p className='p-7' >Wide coverage Map</p>
                          </div>
                       </div>
                    </div>
                    
                </div>
            </div>
            <div className='mt-10'>
                     <p className='text-[50px] text-center'>Flash Sales</p>
            </div>
            <div className='flex flex-row justify-center space-x-[100px] mt-5 text-white text-4xl font-bold'>
                <div className='bg-black h-[100px] w-[270px] rounded-[12px] text-center'><p className='mt-2'>02 <br /> <span className='opacity-70'> Days</span></p></div>
                <div className='bg-black h-[100px] w-[270px] rounded-[12px] text-center'><p className='mt-2'>14 <br /> <span className='opacity-70'> Hours</span></p></div>
                <div className='bg-black h-[100px] w-[270px] rounded-[12px] text-center'><p className='mt-2'>26 <br /> <span className='opacity-70'> Minus</span></p></div>
            </div>
            <div className='main opacity-90 mt-12'>
            <div className='flex flex-row justify-start mt-5 overflow-x-scroll font-bold pb-10 hide-scroll-bar text-xl text-black'>
               
                {products.map((product: Product) => (
                <div className='h-[380px] min-w-[230px] ml-12 max-w-[1500px] mx-4 border-2 border-solid border-black rounded-[12px] mt-5 bg-white' key={product.id}>
                    <img src={c} alt="" className='rounded-[12px] ' />
                    <p className='p-2'>{product.name}</p>
                    <Button className='ml-[20px] h-[35px] w-[35px]'>+</Button>
                </div>
                ))}
                
            </div>
            </div>
            <div className='mt-12'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-6xl font-bold ml-12'>Enjoy your favorite <br /> grocery items</p>
                    </div>
                    <div>
                        <img src={l} alt=""  className=' h-[600px] w-[600px]'/>
                    </div>
                </div>
                <div>
                    <p className='ml-8 text-3xl font-bold mb-10'>Shop by category</p>
                    <div className='flex flex-row justify-start mt-5 overflow-x-scroll font-bold pb-10 hide-scroll-bar text-xl text-black'>
               
                        {products.map((product: Product) => (
                        <div className='h-[380px] min-w-[230px] ml-12 max-w-[1500px] bg-white drop-shadow-2xl rounded-[12px]' key={product.id}>
                            <img src={ccc} alt="" className='rounded-[12px] p-5 ' />
                            <p className='p-2'>{product.name}</p>
                            <Button className='ml-[20px] h-[35px] w-[35px]'>+</Button>
                        </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='text-center text-4xl font-bold mt-12'>GROCERY DISPLAY</p>
                    <div className='flex flex-wrap mt-5  font-bold pb-10 text-xl text-black'>
               
                        {products.map((product: Product) => (
                        <div className='mt-12 h-[380px] min-w-[230px] ml-12 max-w-[1500px] bg-white drop-shadow-2xl rounded-[12px] p-4' key={product.id}>
                            <img src={ccc} alt="" className='rounded-[12px] p-5 ' />
                            <p className='p-2'>{product.name}</p>
                            <Button className='ml-[20px] h-[35px] w-[35px]'>+</Button>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                    <p className='text-center text-4xl font-bold mt-12'>Happy Clients</p>
                    <div className='flex justify-evenly mt-5 text-black'>
                        <div className='drop-shadow-2xl mt-12 bg-white opacity-75 h-[300px] w-[600px] text-center rounded-[12px] '>
                            <p className='text-2xl p-5'>
                                "Everything was great, super quick <br />delivery, great packaging, attention to <br /> detail and very helpful staff. <br /> Thank you very much."
                                <div className='flex justify-end mt-12'>
                                    <img className="h-20 w-20" src={customer} alt="" />
                                    <p className='p-5'>Schorlet Johnson</p>
                                </div>
                            </p>
                        </div>
                        <div className='drop-shadow-2xl mt-12 bg-white opacity-75 h-[300px] w-[600px] text-center rounded-[12px] '>
                            <p className='text-2xl p-5'>
                                "Great, super quick delivery, <br /> great service, good attention to detail <br />and very helpful staff. <br /> Thank you grosa.
"
                                <div className='flex justify-end mt-12'>
                                    <img className="h-20 w-20" src={cus} alt="" />
                                    <p className='p-5'>Jekins Pheobe</p>
                                </div>
                            </p>
                        </div>
                    </div>
            </div>
            <div>
                <div className='bg-black h-[70vh] mt-12 '>
                <div className='p-12'>
                    <svg width="255.723px" height="154.041px" viewBox="0 0 412 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.5777 46.7634H81.7226V84.9277C77.0891 88.3201 72.1453 90.7817 66.8913 92.3124C61.6786 93.8431 56.2177 94.6085 50.5085 94.6085C43.0618 94.6085 36.277 93.4501 30.1542 91.1333C24.0727 88.7752 18.86 85.5483 14.5161 81.4526C10.1722 77.3156 6.82117 72.4338 4.46304 66.8074C2.10492 61.1397 0.925858 54.9961 0.925858 48.3768C0.925858 41.6334 2.04286 35.4485 4.27688 29.8221C6.51089 24.1543 9.69642 19.2726 13.8335 15.1769C18.0119 11.0812 23.0384 7.8957 28.9131 5.62032C34.8291 3.34494 41.4277 2.20725 48.7089 2.20725C52.4736 2.20725 56.0108 2.51753 59.3204 3.13809C62.6301 3.75864 65.6708 4.60674 68.4427 5.68238C71.2559 6.75801 73.8208 8.0405 76.1376 9.52984C78.4543 11.0192 80.5229 12.6326 82.3432 14.3702L76.2617 23.6165C75.3102 25.0645 74.0691 25.954 72.5384 26.2849C71.049 26.6159 69.4356 26.2436 67.698 25.1679C66.0432 24.175 64.4711 23.3269 62.9817 22.6236C61.5338 21.879 60.0444 21.2791 58.5137 20.824C56.983 20.3689 55.3696 20.038 53.6734 19.8311C51.9772 19.6243 50.0741 19.5208 47.9642 19.5208C44.034 19.5208 40.4968 20.2241 37.3527 21.6307C34.2085 22.996 31.5194 24.9404 29.2854 27.464C27.0928 29.9876 25.3966 33.0283 24.1968 36.5862C22.9971 40.1027 22.3972 44.0329 22.3972 48.3768C22.3972 53.1758 23.0591 57.437 24.383 61.1603C25.7068 64.8837 27.5685 68.0279 29.968 70.5928C32.4089 73.1578 35.3048 75.1229 38.6558 76.4881C42.0482 77.812 45.7923 78.4739 49.888 78.4739C52.4116 78.4739 54.6869 78.2257 56.7141 77.7293C58.7826 77.2328 60.7891 76.5709 62.7335 75.7435V62.0291H53.7975C52.4736 62.0291 51.4393 61.6775 50.6947 60.9742C49.95 60.2709 49.5777 59.3814 49.5777 58.3058V46.7634ZM110.742 39.1926C112.728 35.7174 115.004 32.987 117.569 31.0012C120.175 29.0154 123.154 28.0225 126.505 28.0225C129.401 28.0225 131.759 28.7051 133.579 30.0703L132.338 44.2191C132.131 45.1292 131.779 45.7498 131.283 46.0808C130.828 46.4117 130.187 46.5772 129.359 46.5772C129.028 46.5772 128.594 46.5565 128.056 46.5151C127.518 46.4738 126.96 46.4324 126.381 46.391C125.801 46.3083 125.201 46.2462 124.581 46.2049C124.002 46.1221 123.464 46.0808 122.967 46.0808C120.154 46.0808 117.9 46.8254 116.203 48.3148C114.549 49.8041 113.142 51.8726 111.984 54.5204V93.6156H92.7463V29.2636H104.165C105.116 29.2636 105.902 29.3464 106.523 29.5118C107.185 29.6773 107.722 29.9462 108.136 30.3186C108.591 30.6495 108.922 31.1046 109.129 31.6838C109.377 32.263 109.584 32.9663 109.75 33.7937L110.742 39.1926ZM168.708 28.2707C173.59 28.2707 178.038 29.0361 182.051 30.5668C186.063 32.0975 189.497 34.2901 192.352 37.1447C195.248 39.9993 197.482 43.4744 199.054 47.5701C200.667 51.6244 201.474 56.1959 201.474 61.2845C201.474 66.4144 200.667 71.0479 199.054 75.185C197.482 79.2807 195.248 82.7765 192.352 85.6724C189.497 88.527 186.063 90.7403 182.051 92.3124C178.038 93.8431 173.59 94.6085 168.708 94.6085C163.785 94.6085 159.297 93.8431 155.242 92.3124C151.229 90.7403 147.754 88.527 144.817 85.6724C141.921 82.7765 139.666 79.2807 138.053 75.185C136.481 71.0479 135.695 66.4144 135.695 61.2845C135.695 56.1959 136.481 51.6244 138.053 47.5701C139.666 43.4744 141.921 39.9993 144.817 37.1447C147.754 34.2901 151.229 32.0975 155.242 30.5668C159.297 29.0361 163.785 28.2707 168.708 28.2707ZM168.708 80.3356C173.135 80.3356 176.383 78.7842 178.451 75.6814C180.561 72.5373 181.616 67.7796 181.616 61.4086C181.616 55.0375 180.561 50.3006 178.451 47.1978C176.383 44.095 173.135 42.5436 168.708 42.5436C164.158 42.5436 160.827 44.095 158.717 47.1978C156.608 50.3006 155.553 55.0375 155.553 61.4086C155.553 67.7796 156.608 72.5373 158.717 75.6814C160.827 78.7842 164.158 80.3356 168.708 80.3356ZM258.448 44.5294C257.869 45.2327 257.31 45.7912 256.773 46.2049C256.235 46.6186 255.469 46.8254 254.477 46.8254C253.525 46.8254 252.656 46.5979 251.87 46.1428C251.125 45.6877 250.277 45.1913 249.326 44.6535C248.374 44.0743 247.257 43.5572 245.975 43.1021C244.692 42.647 243.1 42.4195 241.197 42.4195C238.838 42.4195 236.791 42.8539 235.053 43.7226C233.357 44.5914 231.95 45.8325 230.833 47.446C229.716 49.0594 228.889 51.0452 228.351 53.4034C227.813 55.7201 227.544 58.3471 227.544 61.2845C227.544 67.4487 228.723 72.1856 231.081 75.4952C233.481 78.8049 236.77 80.4597 240.948 80.4597C243.182 80.4597 244.941 80.1908 246.223 79.653C247.547 79.0738 248.664 78.4532 249.574 77.7913C250.484 77.088 251.312 76.4468 252.056 75.8676C252.842 75.2884 253.815 74.9988 254.973 74.9988C256.504 74.9988 257.662 75.5573 258.448 76.6743L264.033 83.5625C262.047 85.8379 259.958 87.6996 257.765 89.1475C255.573 90.5541 253.318 91.6712 251.001 92.4986C248.726 93.2846 246.43 93.8224 244.113 94.112C241.796 94.443 239.542 94.6085 237.349 94.6085C233.419 94.6085 229.654 93.8638 226.055 92.3745C222.497 90.8851 219.353 88.7338 216.622 85.9206C213.933 83.0661 211.782 79.5703 210.169 75.4332C208.597 71.2961 207.81 66.5799 207.81 61.2845C207.81 56.6509 208.493 52.3277 209.858 48.3148C211.265 44.2605 213.313 40.7646 216.002 37.8273C218.732 34.8486 222.083 32.5112 226.055 30.815C230.068 29.1188 234.701 28.2707 239.955 28.2707C245.003 28.2707 249.429 29.0774 253.235 30.6909C257.041 32.3044 260.475 34.6625 263.537 37.7653L258.448 44.5294ZM291.192 29.2636V93.6156H271.955V29.2636H291.192ZM293.178 11.6397C293.178 13.1705 292.868 14.6184 292.247 15.9837C291.627 17.3075 290.779 18.4866 289.703 19.5208C288.627 20.5137 287.365 21.3205 285.918 21.941C284.511 22.5202 283.001 22.8098 281.387 22.8098C279.815 22.8098 278.347 22.5202 276.981 21.941C275.616 21.3205 274.396 20.5137 273.32 19.5208C272.286 18.4866 271.458 17.3075 270.838 15.9837C270.259 14.6184 269.969 13.1705 269.969 11.6397C269.969 10.0677 270.259 8.599 270.838 7.23377C271.458 5.86854 272.286 4.6688 273.32 3.63453C274.396 2.60027 275.616 1.79354 276.981 1.21435C278.347 0.635166 279.815 0.345573 281.387 0.345573C283.001 0.345573 284.511 0.635166 285.918 1.21435C287.365 1.79354 288.627 2.60027 289.703 3.63453C290.779 4.6688 291.627 5.86854 292.247 7.23377C292.868 8.599 293.178 10.0677 293.178 11.6397ZM309.387 93.6156V42.4815L305.167 41.6127C303.719 41.2818 302.54 40.7646 301.63 40.0613C300.761 39.358 300.327 38.3238 300.327 36.9585V29.3877H309.387V25.7264C309.387 22.0444 309.966 18.7141 311.125 15.7354C312.325 12.7567 314.021 10.2125 316.213 8.10256C318.447 5.99266 321.157 4.35852 324.343 3.20014C327.528 2.04177 331.148 1.46258 335.203 1.46258C336.775 1.46258 338.223 1.56601 339.546 1.77286C340.87 1.93834 342.256 2.22793 343.704 2.64164L343.332 12.0121C343.29 12.674 343.125 13.2325 342.835 13.6876C342.546 14.1013 342.153 14.4529 341.656 14.7425C341.201 14.9908 340.705 15.1769 340.167 15.301C339.629 15.4252 339.091 15.4872 338.554 15.4872C336.857 15.4872 335.347 15.6527 334.023 15.9837C332.7 16.3146 331.583 16.9145 330.672 17.7833C329.804 18.6107 329.142 19.7277 328.687 21.1343C328.232 22.4995 328.004 24.2371 328.004 26.347V29.3877H343.084V42.5436H328.625V93.6156H309.387ZM411.185 29.2636L376.806 110.309C376.227 111.591 375.524 112.522 374.696 113.101C373.869 113.722 372.545 114.032 370.725 114.032H356.328L368.739 87.9685L343.048 29.2636H360.051C361.54 29.2636 362.678 29.5946 363.464 30.2565C364.292 30.9184 364.891 31.7045 365.264 32.6146L375.813 60.3536C376.806 62.8772 377.613 65.4629 378.233 68.1106C378.688 66.7867 379.144 65.4629 379.599 64.139C380.054 62.8152 380.529 61.512 381.026 60.2295L390.583 32.6146C390.955 31.6631 391.617 30.8771 392.568 30.2565C393.52 29.5946 394.554 29.2636 395.671 29.2636H411.185Z" fill="#FFB800"/>
                    </svg>
                </div>
                <div>
                    <div className='flex justify-evenly text-white'>
                        <div className='w-32 '>
                            <div className='flex flex-col'>
                                <p className='mt-5'>About</p>
                                <p className='mt-5'>Service</p>
                                <p className='mt-5'>Contact</p>
                            </div>
                        </div>
                        <div className='ml-12 w-64'>
                            <div className='flex flex-col'>
                                <p className='mt-5 font-bold'>Help</p>
                                <p className='mt-5'>Customer Support</p>
                                <p className='mt-5'>Delivery Details</p>
                            </div>
                        </div>
                        <div className='ml-12 w-64'>
                            <div className='flex flex-col'>
                                <p className='mt-5 font-bold'>Get connected </p>
                                <p className='mt-5'>Join the conversation on social media and stay connected with our latest products and Services.
                                </p>
                            </div>
                        </div>
                        <div className='ml-12 w-64'>
                            <div className='flex flex-col'>
                                    <p className='mt-5 font-bold'>Stay informed </p>
                                    <p className='mt-5'>Subscribe to our notification to receive updates of new products and services.
                                    </p>
                                    <Button className='text-green-500 font-bold w-[100px] mt-5 rounded-[2px]'>Subscribe</Button>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}