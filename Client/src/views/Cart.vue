<template>
    <main class="w-full bg-white">
        <div class="flex mx-auto w-9/12">
            <div class="w-full">
                <nav class="flex py-6" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="#" class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-[#41a1bb] dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <a href="#" class="ml-1 text-xs font-medium text-gray-700 hover:text-[#41a1bb] md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                    </div>
                    </li>
                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg aria-hidden="true" class="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                    </div>
                    </li>
                </ol>
            </nav>
            <div class="mb-10">
                <h1 class="text-[#41a1bb] text-xl font-bold">
                    My Cart
                </h1>
                <div class="cart-main-wrap my-5">
                    <div class="grid grid-cols-3 gap-16">
                        <div class="cart-list-col col-span-3 sm:col-span-2">
                            <div class="grid grid-cols-12 mb-2">
                                <div class="col-span-6 text-sm font-semibold text-[#626262]">Product</div>
                                <div class="col-span-2 text-sm font-semibold text-[#626262]">Price</div>
                                <div class="col-span-2 text-sm font-semibold text-[#626262]">Qty</div>
                                <div class="col-span-2 text-sm font-semibold text-[#626262]">Subtotal</div>
                            </div>
                            <hr class="border-1 border-gray-300">
                            <div class="grid grid-cols-12 items-center mt-3">
                                <div class="col-span-6">
                                    <div class="flex items-center">
                                        <div class="mr-3">
                                            <img class="w-18 h-16" src="../assets/images/banner/b18.webp">
                                        </div>
                                        <div class="flex flex-col">
                                            <h1 class="text-sm font-bold">Coach</h1>
                                            <p class="text-xs text-[#626262]">Leather Coach Bag</p>
                                            <span class="text-xs">Qty - 1</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="grid grid-cols-12 items-center" >
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">1</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                    </div>
                                    <div class="grid grid-cols-12 justify-items-center mt-4">
                                        <div class="col-span-5 text-xs text-[#41a1bb] font-bold" style="font-size:0.65rem">
                                            Move to Wishlist
                                        </div>
                                        <div class="col-span-4 text-xs text-[#ff0000] font-bold" style="font-size:0.65rem">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-12 items-center mt-4">
                                <div class="col-span-6">
                                    <div class="flex items-center">
                                        <div class="mr-3">
                                            <img class="w-18 h-16" src="../assets/images/banner/b17.webp">
                                        </div>
                                        <div class="flex flex-col">
                                            <h1 class="text-sm font-bold">Coach</h1>
                                            <p class="text-xs text-[#626262]">Leather Coach Bag</p>
                                            <span class="text-xs">Qty - 1</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="grid grid-cols-12 items-center" >
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">1</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                    </div>
                                    <div class="grid grid-cols-12 justify-items-center mt-4">
                                        <div class="col-span-5 text-xs text-[#41a1bb] font-bold" style="font-size:0.65rem">
                                            Move to Wishlist
                                        </div>
                                        <div class="col-span-4 text-xs text-[#ff0000] font-bold" style="font-size:0.65rem">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                                
                            </div><div class="grid grid-cols-12 items-center mt-4">
                                <div class="col-span-6">
                                    <div class="flex items-center">
                                        <div class="mr-3">
                                            <img class="w-18 h-16" src="../assets/images/banner/b18.webp">
                                        </div>
                                        <div class="flex flex-col">
                                            <h1 class="text-sm font-bold">Coach</h1>
                                            <p class="text-xs text-[#626262]">Leather Coach Bag</p>
                                            <span class="text-xs">Qty - 1</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="grid grid-cols-12 items-center" >
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">1</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                    </div>
                                    <div class="grid grid-cols-12 justify-items-center mt-4">
                                        <div class="col-span-5  text-[#41a1bb] font-bold" style="font-size:0.65rem">
                                            Move to Wishlist
                                        </div>
                                        <div class="col-span-4 text-xs text-[#ff0000] font-bold" style="font-size:0.65rem">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                                
                            </div><div class="grid grid-cols-12 items-center mt-4">
                                <div class="col-span-6">
                                    <div class="flex items-center">
                                        <div class="mr-3">
                                            <img class="w-18 h-16" src="../assets/images/banner/b17.webp">
                                        </div>
                                        <div class="flex flex-col">
                                            <h1 class="text-sm font-bold">Coach</h1>
                                            <p class="text-xs text-[#626262]">Leather Coach Bag</p>
                                            <span class="text-xs">Qty - 1</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="grid grid-cols-12 items-center" >
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">1</div>
                                        <div class="col-span-4 text-xs text-[#13101E] font-bold">$54.69</div>
                                    </div>
                                    <div class="grid grid-cols-12 justify-items-center mt-4">
                                        <div class="col-span-5 text-xs text-[#41a1bb] font-bold" style="font-size:0.65rem">
                                            Move to Wishlist
                                        </div>
                                        <div class="col-span-4 text-xs text-[#ff0000] font-bold" style="font-size:0.65rem">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>



                        <div class="order-col col-span-3 sm:col-span-1">
                            <h1 class="text-[#13101E] text-md font-semibold">Order Summary</h1>
                            <hr class="border-1 border-gray-300 my-2">
                            <div class="flex flex-col w-full">
                                <div class="flex flex-row justify-between py-2 px-2">
                                    <div class="text-xs text-[#626262]">SubTotal</div>
                                    <div class="text-xs text-[#13101E] font-semibold">$119.00</div>
                                </div>
                                <div class="flex flex-row justify-between py-2 px-2">
                                    <div class="text-xs text-[#626262]">Discount</div>
                                    <div class="text-xs text-[#13101E] font-semibold">$13.00</div>
                                </div>
                                <div class="flex flex-row justify-between py-2 px-2">
                                    <div class="text-xs text-[#626262]">Delivery</div>
                                    <div class="text-xs text-[#13101E] font-semibold">$00.00</div>
                                </div>
                                <div class="flex flex-row justify-between py-2 px-2">
                                    <div class="text-xs text-[#626262] font-bold">Grand Total</div>
                                    <div class="text-xs text-[#13101E] font-bold">$102.29</div>
                                </div>
                                <div class="flex justify-between py-2 px-1">
                                    <button class="py-2 px-8 rounded text-white bg-[#084454] text-xs font-bold ">Place Order</button>
                                    <button class="py-2 px-4 rounded text-[#084454] bg-white text-xs font-bold border border-[#084454]">Continue Shopping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
.cart-container{
    height:20rem;
}

</style>