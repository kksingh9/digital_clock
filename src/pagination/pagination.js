import { useEffect, useState } from 'react';
import style from './pagination.module.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PAGE_SIZE } from '../constant';

const ProductCard = ({image,title}) => {
    
    return <>
    <div className={style['product-card']}>
        <img src={image} alt='image' className={style['product-img']} />
        <span>{title}</span>
        </div>
        </>
}
const Pagination = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const fetchData = async() => {

        try{
            const res = await fetch(`https://dummyjson.com/products?limit=500`);
            const data = await res.json()
            console.log(data);
            
            setData(data.products)
        }catch(err){

        }
    }
    useEffect(() => {
        fetchData()
    },[])

    const totalProducts = data.length;
    const pages = Math.ceil(totalProducts/PAGE_SIZE);
    const start = currentPage*PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const handlePagination = (n) => {
        setCurrentPage(n)
    }

    return (
        <>
        {data?.length === 0 ? <div>No product found</div> :
        <>
        <h1>Pagination</h1>
       
            <div className={style['products-container']}>
            {data?.slice(start,end).map( (data,index) => (
              <ProductCard key={index} image={data.thumbnail} title={data.title} />
            ))}
            </div>

            <div className={style['page-container']}>
            <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev-1)}><FaChevronLeft/></button>
            {
                [...Array(pages).keys()].map((n) => (
                    <span className={style['page-number']} key={n}
                    onClick={() => handlePagination(n)}
                    >{n}</span>
                ))
            }
            <button disabled={currentPage === (pages-1)} onClick={() => setCurrentPage((prev) => prev+1)}><FaChevronRight /></button>
            </div>
            </>
        }
        
        </>
    )
}

export default Pagination;
