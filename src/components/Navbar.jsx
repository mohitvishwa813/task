import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[70px] flex items-center justify-between px-[8%] '>
<div className='  flex items-center gap-4 '> 
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHWSURBVHgBzZYxVttAEIb/mZVtlU6XxrFukJR5ec/GJaXTpcM5QeAEJDdIl9KkSpucICsqSjgBhgsgKgw8zTKyJCOBbWyB3uNrdqXVv//szO4+ARXgVv8bN/sX2p7C/xigAoxq7ILQ1jZgaY5QgdS4PWhvInJwk7wvjNO1hQUfZr+/z1eyUdoINP+OnXuzjqbk0/j0wZDp2jweAp+5+PzoqQm0GRbC2HbUCSHnk1U64u5Pjfht6kM+a9psPigS21Vi0+iNNM/fHwVjeLxGuU7mPkyW3bX5PDc33vulMn8QOKb9JaMBXcVjrIRc2ro9TA9/6+aykS59Fo0u/wB+f2eRjJ38TwyWTgsacqu3u1Db3Bqr7yjpixibtGYWQ6MzVeEonQBD8t5dzmutKWTp/tKBAZ6Eth9qSTp/iPAl+yByN+Fe5pOgk7fk4sEsE81NpAkKsjO7CQu1+u6fuz6cbUwvfWUjh57VVQ8K4oAKoW3IQi3pXsoKfX9z5XWuk7y+JWMh+Yt6iXBrjx8ZY+odo0Y0xWHx2bvv2kio95WFAtSA45sDvAZK+y65Ep3BFmpAcPsD06NJ/uyVBhk75EpH6sUw0ghj6M2YUfVH4NmUjIkoRE3EhNLNeAf0KZwkNfQkUAAAAABJRU5ErkJggg==" alt="" className='w-[25px] h-[25px]' /> Landguru</div>
     <div className='md:flex items-center justify-center gap-8   md:block hidden '>
     <a href="#">Home</a>
<a href="#">Advertise</a>
<a href="#">Supports</a>
<a href="#">Contact</a>

     </div>

     <div className='bg-[#FFDC6B] md:block hidden text-[#ec8e00] px-4 py-2 rounded-md'>
    Try for free
</div>

    </div>
  )
}

export default Navbar