(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<a href=\"#\" class=\"btn btn-primary back-to-top\"><i class=\"fa fa-angle-double-up\"></i></a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-product/add-product.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-product/add-product.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">add product</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5 \">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form [formGroup]=\"productForm\">\n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\"  placeholder=\" description \"/> \n                    </div>\n                    <div *ngIf=\"productForm.controls['description'].invalid && \n                (productForm.controls['description'].touched || productForm.controls['description'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['description'].errors.required\">\n                  Description is required \n                </div>\n                </div>\n\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"price\"  placeholder=\"price\" />\n                        \n                    </div>\n                    <div *ngIf=\"productForm.controls['price'].invalid && \n                (productForm.controls['price'].touched || productForm.controls['price'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['price'].errors.required\" style=\"color: red;\">\n                  price is required\n                </div>\n                <div *ngIf=\"productForm.controls['price'].errors.min\">\n                  price have must 1\n\n                </div>\n                </div>\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"qty\"  placeholder=\"qty\" />\n                        \n                    </div>\n                    <div *ngIf=\"productForm.controls['qty'].invalid && \n                (productForm.controls['qty'].touched || productForm.controls['qty'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['qty'].errors.required\" style=\"color: red;\">\n                  Qty is required\n                </div>\n\n                <div *ngIf=\"productForm.controls['qty'].errors.min\">\n                    Qty must 1\n  \n                  </div>\n                \n                </div>\n                <div class=\"control-group form-group\">\n                <select class=\"custom-select\" formControlName=\"category\" name=\"category\">\n                  <option selected>select category</option>\n                  <option value=\"Home\">Home</option>\n                  <option value=\"Clothes\">Clothes</option>\n                  <option value=\"Electro\">Electro</option>\n                </select>\n              </div>\n              \n              <div class=\"text-center\">\n                <button class=\"btn btn-danger\" (click)=\"filePicker.click()\">Select your avatar</button>\n              </div>  \n\n              <div class=\"form-group\">\n                <input type=\"file\" class=\"form-control\" #filePicker (change)='onImageSelected($event)' style=\"visibility: hidden;\" >\n              </div>\n\n              <div class=\"text-center\" style=\"margin-bottom: 20px;\">\n                <img [src]=\"imagePreview\" *ngIf=\"imagePreview\" alt=\"avatar\">\n              </div>\n                    \n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\" (click)=\"addProduct()\" >Add Product</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/annonce-client-table/annonce-client-table.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/annonce-client-table/annonce-client-table.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">userId</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Qty</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of V\">\n            <td>{{item.userId}}</td>\n            <td>{{item.description}}</td>\n            <td>{{item.qty}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.date}}</td>\n           \n            <td><img [src]=\"item.avatar\" style=\"width:100px; height: 100px;\"></td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    <button class=\" btn-warning \" (click)=\"gotoEdit(item._id)\">Edit</button>\n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/annonce-table/annonce-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/annonce-table/annonce-table.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" name=\"value\" placeholder=\"Search\"\n        style=\"margin: 20px; width: 80%;\">\n</form>\n<table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">userId</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Qty</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Category</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of V | filterPrice: term || filterCategory: term\">\n            <td>{{item.userId}}</td>\n            <td>{{item.description}}</td>\n            <td>{{item.qty}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.category}}</td>\n            <td>{{item.date}}</td>\n           \n            <td><img [src]=\"item.avatar\" style=\"width:100px; height: 100px;\"></td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    \n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/annonce-user-table/annonce-user-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/annonce-user-table/annonce-user-table.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\n    <thead>\n        <tr >\n            \n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Qty</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Category</th>\n           \n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of T\">\n            \n            <td>{{item.annonce[0].description}}</td>\n            <td>{{item.qty}}</td>\n            <td>{{item.annonce[0].price}}</td>\n            <td>{{item.annonce[0].category}}</td>\n            \n           \n            <td><img [src]=\"item.annonce[0].avatar\" style=\"width:100px; height: 100px;\"></td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    \n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/annonce/annonce.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/annonce/annonce.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-item bg-light mb-4\">\n    <div class=\"product-img position-relative overflow-hidden\">\n        <img class=\"img-fluid w-100\" [src]=\"annonce.avatar\" alt=\"\">\n        <div class=\"product-action\">\n            <a class=\"btn btn-outline-dark btn-square\"  routerLink=\"\" (click)=\"gotoDisplay(annonce._id)\"><i class=\"fa fa-shopping-cart\"></i></a>\n            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n        </div>\n    </div>\n    <div class=\"text-center py-4\">\n        <a style=\"color: #000080;\" class=\"h6 text-decoration-none text-truncate\" href=\"\">{{annonce.description}}</a><br>\n        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">{{annonce.category}}</a>\n        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n            <h5  [ngClass]=\"{'min': color(annonce.price)==1,\n            'moy': color(annonce.price)==2,\n            'max': color(annonce.price)==3}\">${{annonce.price}}</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n        </div>\n        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n            <small class=\"fa fa-star text-primary mr-1\"></small>\n            <small class=\"fa fa-star text-primary mr-1\"></small>\n            <small class=\"fa fa-star text-primary mr-1\"></small>\n            <small class=\"fa fa-star text-primary mr-1\"></small>\n            <small class=\"fa fa-star text-primary mr-1\"></small>\n            <small>(99)</small>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/carousel/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mb-3\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-8\">\n            <div id=\"header-carousel\" class=\"carousel slide carousel-fade mb-30 mb-lg-0\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                    <li data-target=\"#header-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li data-target=\"#header-carousel\" data-slide-to=\"1\"></li>\n                    <li data-target=\"#header-carousel\" data-slide-to=\"2\"></li>\n                </ol>\n                <div class=\"carousel-inner\">\n                    <div class=\"carousel-item position-relative active\" style=\"height: 430px;\">\n                        <img class=\"position-absolute w-100 h-100\" src=\"assets/img/carousel-1.jpg\" style=\"object-fit: cover;\">\n                        <div class=\"carousel-caption d-flex flex-column align-items-center justify-content-center\">\n                            <div class=\"p-3\" style=\"max-width: 700px;\">\n                                <h1 class=\"display-4 text-white mb-3 animate__animated animate__fadeInDown\">Men Fashion</h1>\n                                <p class=\"mx-md-5 px-5 animate__animated animate__bounceIn\">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>\n                                <a class=\"btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp\" href=\"#\">Shop Now</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"carousel-item position-relative\" style=\"height: 430px;\">\n                        <img class=\"position-absolute w-100 h-100\" src=\"assets/img/carousel-2.jpg\" style=\"object-fit: cover;\">\n                        <div class=\"carousel-caption d-flex flex-column align-items-center justify-content-center\">\n                            <div class=\"p-3\" style=\"max-width: 700px;\">\n                                <h1 class=\"display-4 text-white mb-3 animate__animated animate__fadeInDown\">Women Fashion</h1>\n                                <p class=\"mx-md-5 px-5 animate__animated animate__bounceIn\">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>\n                                <a class=\"btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp\" href=\"#\">Shop Now</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"carousel-item position-relative\" style=\"height: 430px;\">\n                        <img class=\"position-absolute w-100 h-100\" src=\"assets/img/carousel-3.jpg\" style=\"object-fit: cover;\">\n                        <div class=\"carousel-caption d-flex flex-column align-items-center justify-content-center\">\n                            <div class=\"p-3\" style=\"max-width: 700px;\">\n                                <h1 class=\"display-4 text-white mb-3 animate__animated animate__fadeInDown\">Kids Fashion</h1>\n                                <p class=\"mx-md-5 px-5 animate__animated animate__bounceIn\">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>\n                                <a class=\"btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp\" href=\"#\">Shop Now</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"product-offer mb-30\" style=\"height: 200px;\">\n                <img class=\"img-fluid\" src=\"assets/img/offer-1.jpg\" alt=\"\">\n                <div class=\"offer-text\">\n                    <h6 class=\"text-white text-uppercase\">Save 20%</h6>\n                    <h3 class=\"text-white mb-3\">Special Offer</h3>\n                    <a href=\"\" class=\"btn btn-primary\">Shop Now</a>\n                </div>\n            </div>\n            <div class=\"product-offer mb-30\" style=\"height: 200px;\">\n                <img class=\"img-fluid\" src=\"assets/img/offer-2.jpg\" alt=\"\">\n                <div class=\"offer-text\">\n                    <h6 class=\"text-white text-uppercase\">Save 20%</h6>\n                    <h3 class=\"text-white mb-3\">Special Offer</h3>\n                    <a href=\"\" class=\"btn btn-primary\">Shop Now</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n    <div class=\"row px-xl-5 pb-3\">\n        <div class=\"col-lg-3 col-md-6 col-sm-12 pb-1\">\n            <div class=\"d-flex align-items-center bg-light mb-4\" style=\"padding: 30px;\">\n                <h1 class=\"fa fa-check text-primary m-0 mr-3\"></h1>\n                <h5 class=\"font-weight-semi-bold m-0\">Quality Product</h5>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-12 pb-1\">\n            <div class=\"d-flex align-items-center bg-light mb-4\" style=\"padding: 30px;\">\n                <h1 class=\"fa fa-shipping-fast text-primary m-0 mr-2\"></h1>\n                <h5 class=\"font-weight-semi-bold m-0\">Free Shipping</h5>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-12 pb-1\">\n            <div class=\"d-flex align-items-center bg-light mb-4\" style=\"padding: 30px;\">\n                <h1 class=\"fas fa-exchange-alt text-primary m-0 mr-3\"></h1>\n                <h5 class=\"font-weight-semi-bold m-0\">14-Day Return</h5>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-12 pb-1\">\n            <div class=\"d-flex align-items-center bg-light mb-4\" style=\"padding: 30px;\">\n                <h1 class=\"fa fa-phone-volume text-primary m-0 mr-3\"></h1>\n                <h5 class=\"font-weight-semi-bold m-0\">24/7 Support</h5>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Featured End -->\n\n\n<!-- Categories Start -->\n<div class=\"container-fluid pt-5\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Categories</span></h2>\n    <div class=\"row px-xl-5 pb-3\">\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-4.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-4.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-2.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-1.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-4.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <a class=\"text-decoration-none\" href=\"\">\n                <div class=\"cat-item img-zoom d-flex align-items-center mb-4\">\n                    <div class=\"overflow-hidden\" style=\"width: 100px; height: 100px;\">\n                        <img class=\"img-fluid\" src=\"assets/img/cat-3.jpg\" alt=\"\">\n                    </div>\n                    <div class=\"flex-fill pl-3\">\n                        <h6>Category Name</h6>\n                        <small class=\"text-body\">100 Products</small>\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n<!-- Categories End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <span class=\"breadcrumb-item active\">Contact</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Contact Start -->\n<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Contact Us</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5\">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form name=\"sentMessage\" id=\"contactForm\" novalidate=\"novalidate\">\n                    <div class=\"control-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\"\n                            required=\"required\" data-validation-required-message=\"Please enter your name\" />\n                        <p class=\"help-block text-danger\"></p>\n                    </div>\n                    <div class=\"control-group\">\n                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Your Email\"\n                            required=\"required\" data-validation-required-message=\"Please enter your email\" />\n                        <p class=\"help-block text-danger\"></p>\n                    </div>\n                    <div class=\"control-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\"\n                            required=\"required\" data-validation-required-message=\"Please enter a subject\" />\n                        <p class=\"help-block text-danger\"></p>\n                    </div>\n                    <div class=\"control-group\">\n                        <textarea class=\"form-control\" rows=\"8\" id=\"message\" placeholder=\"Message\"\n                            required=\"required\"\n                            data-validation-required-message=\"Please enter your message\"></textarea>\n                        <p class=\"help-block text-danger\"></p>\n                    </div>\n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\" id=\"sendMessageButton\">Send\n                            Message</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-lg-5 mb-5\">\n            <div class=\"bg-light p-30 mb-30\">\n                <iframe style=\"width: 100%; height: 250px;\"\n                src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd\"\n                frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n            </div>\n            <div class=\"bg-light p-30 mb-3\">\n                <p class=\"mb-2\"><i class=\"fa fa-map-marker-alt text-primary mr-3\"></i>123 Street, New York, USA</p>\n                <p class=\"mb-2\"><i class=\"fa fa-envelope text-primary mr-3\"></i>info@example.com</p>\n                <p class=\"mb-2\"><i class=\"fa fa-phone-alt text-primary mr-3\"></i>+012 345 67890</p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard-client/dashboard-client.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard-client/dashboard-client.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">userId</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Qty</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of V\">\n            <td>{{item.userId}}</td>\n            <td>{{item.description}}</td>\n            <td>{{item.qty}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.date}}</td>\n           \n            <td><img [src]=\"item.avatar\" style=\"width:100px; height: 100px;\"></td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    <button class=\" btn-warning \" (click)=\"gotoEdit(item._id)\">Edit</button>\n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table> -->\n\n<div class=\"container\" style=\"margin-top:150px ;\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#prod\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">My Annonce</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#players\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\">My order</a>\n        </li>\n       \n\n    </ul>\n    <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"prod\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <app-annonce-client-table></app-annonce-client-table>\n        </div>\n\n        <div class=\"tab-pane fade \" id=\"players\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"table-responsive text-center\">\n              \n              <app-order-client></app-order-client>\n            </div>\n        </div>\n        \n        \n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashbord/dashbord.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashbord/dashbord.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:150px ;\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#users\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">Users</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#annonces\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\">Products</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#stadium\" role=\"tab\" aria-controls=\"stadium\"\n                aria-selected=\"false\">orders</a>\n        </li>\n        \n\n    </ul>\n    <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"users\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n             <app-user-table></app-user-table>\n        </div>\n\n        <div class=\"tab-pane fade \" id=\"annonces\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"table-responsive text-center\">\n               <app-annonce-table></app-annonce-table>\n            </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"stadium\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"table-responsive text-center\">\n                <app-order-table></app-order-table>\n            </div>\n        </div>\n        \n        \n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-annonce/display-annonce.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-annonce/display-annonce.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Shop</a>\n                <span class=\"breadcrumb-item active\">Shop Detail</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Shop Detail Start -->\n<div class=\"container-fluid pb-5\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-5 mb-30\">\n            <div id=\"product-carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                <div class=\"carousel-inner bg-light\">\n                    <div class=\"carousel-item active\">\n                        <img class=\"w-100 h-100\" [src]=\"annonce.avatar\" alt=\"Image\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"w-100 h-100\" src=\"img/product-2.jpg\" alt=\"Image\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"w-100 h-100\" src=\"img/product-3.jpg\" alt=\"Image\">\n                    </div>\n                    <div class=\"carousel-item\">\n                        <img class=\"w-100 h-100\" src=\"img/product-4.jpg\" alt=\"Image\">\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#product-carousel\" data-slide=\"prev\">\n                    <i class=\"fa fa-2x fa-angle-left text-dark\"></i>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#product-carousel\" data-slide=\"next\">\n                    <i class=\"fa fa-2x fa-angle-right text-dark\"></i>\n                </a>\n            </div>\n        </div>\n\n        <div class=\"col-lg-7 h-auto mb-30\">\n            <div class=\"h-100 bg-light p-30\">\n                <h3 style=\"color:darkblue\">{{annonce.description}}</h3>\n                <div class=\"d-flex mb-3\">\n                    <div class=\"text-primary mr-2\">\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star-half-alt\"></small>\n                        <small class=\"far fa-star\"></small>\n                    </div>\n                    <small class=\"pt-1\">(99 Reviews)</small>\n                </div>\n                <h3 style=\"color: #1AB676 ;\" class=\"font-weight-semi-bold mb-4\">Price : {{annonce.price}}</h3>\n                <h3 class=\"font-weight-semi-bold mb-4\">Qty :{{annonce.qty}}</h3>\n                <h3 class=\"font-weight-semi-bold mb-4\">Category :{{annonce.category}}</h3>\n\n                <p class=\"mb-4\">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit\n                    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea\n                    Nonumy</p>\n                <div class=\"d-flex mb-3\">\n                    <strong class=\"text-dark mr-3\"></strong>\n                    <form>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"size-1\" name=\"size\">\n                            <label class=\"custom-control-label\" for=\"size-1\">XS</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"size-2\" name=\"size\">\n                            <label class=\"custom-control-label\" for=\"size-2\">S</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"size-3\" name=\"size\">\n                            <label class=\"custom-control-label\" for=\"size-3\">M</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"size-4\" name=\"size\">\n                            <label class=\"custom-control-label\" for=\"size-4\">L</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"size-5\" name=\"size\">\n                            <label class=\"custom-control-label\" for=\"size-5\">XL</label>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"d-flex mb-4\">\n                    <strong class=\"text-dark mr-3\">Colors:</strong>\n                    <form>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"color-1\" name=\"color\">\n                            <label class=\"custom-control-label\" for=\"color-1\">Black</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"color-2\" name=\"color\">\n                            <label class=\"custom-control-label\" for=\"color-2\">White</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"color-3\" name=\"color\">\n                            <label class=\"custom-control-label\" for=\"color-3\">Red</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"color-4\" name=\"color\">\n                            <label class=\"custom-control-label\" for=\"color-4\">Blue</label>\n                        </div>\n                        <div class=\"custom-control custom-radio custom-control-inline\">\n                            <input type=\"radio\" class=\"custom-control-input\" id=\"color-5\" name=\"color\">\n                            <label class=\"custom-control-label\" for=\"color-5\">Green</label>\n                        </div>\n                    </form>\n                </div>\n                <form class=\"row tracking_form\" [formGroup]=\"orderForm\">\n                    <label for=\"qty\">Quantity:</label>\n                    <input type=\"number\" formControlName=\"qty\" name=\"qty\" title=\"qty:\"\n                        class=\"input-text qty\" />\n                    <div\n                        *ngIf=\"orderForm.controls['qty'].invalid && (orderForm.controls['qty'].touched || orderForm.controls['qty'].dirty )  \">\n                        <div *ngIf=\"orderForm.controls['quantity'].errors.required\">\n                            quantity is required\n                        </div>\n                        <div *ngIf=\"orderForm.controls['qty'].errors.min\">\n                            quantity is must have at leats 1\n                        </div>\n\n                      \n                    </div>\n                </form>\n                    <div >\n                    \n                        <div class=\"text-center mt-3\"   style=\"margin-right:50% ;\">\n                            <span *ngFor=\"let placement of placements; trackBy: trackByValue\">\n                                <button class=\"btn btn-outline-primary\" mwlConfirmationPopover\n                                    [popoverTitle]=\"popoverTitle\" [popoverMessage]=\"popoverMessage\"\n                                    [confirmText]=\"confirmText\" [cancelText]=\"cancelText\" [placement]=\"bottom\"\n                                    (confirm)=\"confirmClicked = true\" (cancel)=\"cancelClicked = true\"\n                                    confirmButtonType=\"success\" cancelButtonType=\"outline-secondary\"\n                                    (click)=\"confirmClicked = false; cancelClicked = false\" [appendToBody]=\"true\">\n                                    {{ placement }}\n                                </button>\n\n                            </span>\n                        </div>\n\n                        \n\n                        <div class=\"alert alert-info\" [hidden]=\"!confirmClicked\">\n                            You clicked confirm!\n                        </div>\n                        <div class=\"alert alert-info\" [hidden]=\"!cancelClicked\">You cancelled!</div>\n\n                   \n                    <div class=\"card_area\">\n                        <a class=\"btn btn-success\" [hidden]=\"!confirmClicked\" (click)=\"AddCommande()\">Add to Cart</a>\n                        <a class=\"icon_btn\" href=\"#\">\n                            <i class=\"lnr lnr lnr-diamond\"></i>\n                        </a>\n                        <a class=\"icon_btn\" href=\"#\">\n                            <i class=\"lnr lnr lnr-heart\"></i>\n                        </a>\n                    </div>\n                    <span style=\"color: red;\">{{msg}} {{qty}}</span>\n                          </div>\n                <div class=\"d-flex pt-2\">\n                    <strong class=\"text-dark mr-2\">Share on:</strong>\n                    <div class=\"d-inline-flex\">\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-facebook-f\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-twitter\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-linkedin-in\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-pinterest\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n       \n    </div>\n    \n    <div class=\"row px-xl-5\">\n        <div class=\"col\">\n            <div class=\"bg-light p-30\">\n                <div class=\"nav nav-tabs mb-4\">\n                    <a class=\"nav-item nav-link text-dark active\" data-toggle=\"tab\" href=\"#tab-pane-1\">Description</a>\n                    <a class=\"nav-item nav-link text-dark\" data-toggle=\"tab\" href=\"#tab-pane-2\">Information</a>\n                    <a class=\"nav-item nav-link text-dark\" data-toggle=\"tab\" href=\"#tab-pane-3\">Reviews (0)</a>\n                </div>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane fade show active\" id=\"tab-pane-1\">\n                        <h4 class=\"mb-3\">Product Description</h4>\n                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>\n                        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"tab-pane-2\">\n                        <h4 class=\"mb-3\">Additional Information</h4>\n                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <ul class=\"list-group list-group-flush\">\n                                    <li class=\"list-group-item px-0\">\n                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.\n                                    </li>\n                                  </ul> \n                            </div>\n                            <div class=\"col-md-6\">\n                                <ul class=\"list-group list-group-flush\">\n                                    <li class=\"list-group-item px-0\">\n                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.\n                                    </li>\n                                  </ul> \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"tab-pane-3\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <h4 class=\"mb-4\">1 review for \"Product Name\"</h4>\n                                <div class=\"media mb-4\">\n                                    <img src=\"img/user.jpg\" alt=\"Image\" class=\"img-fluid mr-3 mt-1\" style=\"width: 45px;\">\n                                    <div class=\"media-body\">\n                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>\n                                        <div class=\"text-primary mb-2\">\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star-half-alt\"></i>\n                                            <i class=\"far fa-star\"></i>\n                                        </div>\n                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h4 class=\"mb-4\">Leave a review</h4>\n                                <small>Your email address will not be published. Required fields are marked *</small>\n                                <div class=\"d-flex my-3\">\n                                    <p class=\"mb-0 mr-2\">Your Rating * :</p>\n                                    <div class=\"text-primary\">\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                    </div>\n                                </div>\n                                <form>\n                                    <div class=\"form-group\">\n                                        <label for=\"message\">Your Review *</label>\n                                        <textarea id=\"message\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"name\">Your Name *</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"email\">Your Email *</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"email\">\n                                    </div>\n                                    <div class=\"form-group mb-0\">\n                                        <input type=\"submit\" value=\"Leave Your Review\" class=\"btn btn-primary px-3\">\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Shop Detail End -->\n\n\n<!-- Products Start -->\n<div class=\"container-fluid py-5\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">You May Also Like</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col\">\n            <div class=\"owl-carousel related-carousel\">\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-1.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-2.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product {{annonce.date}}</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-3.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-4.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-5.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-order/display-order.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-order/display-order.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb Start -->\n<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Shop</a>\n                <span class=\"breadcrumb-item active\">Order</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Cart Start -->\n<!-- Shop Detail Start -->\n<div class=\"container-fluid pb-5\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-5 mb-30\">\n           \n                <div >\n                    <div class=\"carousel-item active\">\n                        <img class=\"w-100 h-100\" [src]=T[0].annonce[0].avatar alt=\"Image\">\n                    </div>\n                    \n                </div>\n                <a class=\"carousel-control-prev\" href=\"#product-carousel\" data-slide=\"prev\">\n                    <i class=\"fa fa-2x fa-angle-left text-dark\"></i>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#product-carousel\" data-slide=\"next\">\n                    <i class=\"fa fa-2x fa-angle-right text-dark\"></i>\n                </a>\n            \n        </div>\n\n        <div class=\"col-lg-7 h-auto mb-30\">\n            <div class=\"h-100 bg-light p-30\">\n                <h3 style=\"color:darkblue\"></h3>\n                <div class=\"d-flex mb-3\">\n                    <div class=\"text-primary mr-2\">\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star\"></small>\n                        <small class=\"fas fa-star-half-alt\"></small>\n                        <small class=\"far fa-star\"></small>\n                    </div>\n                    <small class=\"pt-1\">(99 Reviews)</small>\n                </div>\n                <h3 style=\"color: #1AB676 ;\" class=\"font-weight-semi-bold mb-4\">Price : {{T[0].annonce[0].price}} </h3>\n                <h3 style=\"color: #1AB676 ;\" class=\"font-weight-semi-bold mb-4\">Description : {{T[0].annonce[0].description}}</h3>\n                <h3 class=\"font-weight-semi-bold mb-4\">Qty Resevé : {{T[0].qty}}</h3>\n                <h3 class=\"font-weight-semi-bold mb-4\">Category : {{T[0].annonce[0].category}}</h3>\n                <h3 class=\"font-weight-semi-bold mb-4\">Qty en Stoke : {{T[0].annonce[0].qty}}</h3>\n                <div class=\"d-flex mb-3\">\n                    <strong class=\"text-dark mr-3\"></strong>\n                    \n                </div>\n                <div class=\"\">\n                    <h3 style=\"color: #b61a78 ;\" class=\"font-weight-semi-bold mb-4\">Nom store : {{T[0].user[0].firstName}} </h3>\n                    <h3 style=\"color: #20033c ;\" class=\"font-weight-semi-bold mb-4\">Email : {{T[0].user[0].email}}</h3>\n                  \n                </div>\n                \n                    <div >\n<!--                     \n                        <div class=\"text-center mt-3\"   style=\"margin-right:50% ;\">\n                            <span *ngFor=\"let placement of placements; trackBy: trackByValue\">\n                                <button class=\"btn btn-outline-primary\" mwlConfirmationPopover\n                                    [popoverTitle]=\"popoverTitle\" [popoverMessage]=\"popoverMessage\"\n                                    [confirmText]=\"confirmText\" [cancelText]=\"cancelText\" [placement]=\"bottom\"\n                                    (confirm)=\"confirmClicked = true\" (cancel)=\"cancelClicked = true\"\n                                    confirmButtonType=\"success\" cancelButtonType=\"outline-secondary\"\n                                    (click)=\"confirmClicked = false; cancelClicked = false\" [appendToBody]=\"true\">\n                                    {{ placement }}\n                                </button>\n\n                            </span>\n                        </div> -->\n\n                        \n\n                        <!-- <div class=\"alert alert-info\" [hidden]=\"!confirmClicked\">\n                            You clicked confirm!\n                        </div>\n                        <div class=\"alert alert-info\" [hidden]=\"!cancelClicked\">You cancelled!</div> -->\n\n                   \n                    <!-- <div class=\"card_area\">\n                        <a class=\"btn btn-success\" [hidden]=\"!confirmClicked\" (click)=\"AddCommande()\">Add to Cart</a>\n                        <a class=\"icon_btn\" href=\"#\">\n                            <i class=\"lnr lnr lnr-diamond\"></i>\n                        </a>\n                        <a class=\"icon_btn\" href=\"#\">\n                            <i class=\"lnr lnr lnr-heart\"></i>\n                        </a>\n                    </div> -->\n                   \n                <!-- <div class=\"d-flex pt-2\">\n                    <strong class=\"text-dark mr-2\">Share on:</strong>\n                    <div class=\"d-inline-flex\">\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-facebook-f\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-twitter\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-linkedin-in\"></i>\n                        </a>\n                        <a class=\"text-dark px-2\" href=\"\">\n                            <i class=\"fab fa-pinterest\"></i>\n                        </a>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n       \n    </div>\n    \n    <div class=\"row px-xl-5\">\n        <div class=\"col\">\n            <div class=\"bg-light p-30\">\n                <div class=\"nav nav-tabs mb-4\">\n                    <a class=\"nav-item nav-link text-dark active\" data-toggle=\"tab\" href=\"#tab-pane-1\">Description</a>\n                    <a class=\"nav-item nav-link text-dark\" data-toggle=\"tab\" href=\"#tab-pane-2\">Information</a>\n                    <a class=\"nav-item nav-link text-dark\" data-toggle=\"tab\" href=\"#tab-pane-3\">Reviews (0)</a>\n                </div>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane fade show active\" id=\"tab-pane-1\">\n                        <h4 class=\"mb-3\">Product Description</h4>\n                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>\n                        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"tab-pane-2\">\n                        <h4 class=\"mb-3\">Additional Information</h4>\n                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <ul class=\"list-group list-group-flush\">\n                                    <li class=\"list-group-item px-0\">\n                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.\n                                    </li>\n                                  </ul> \n                            </div>\n                            <div class=\"col-md-6\">\n                                <ul class=\"list-group list-group-flush\">\n                                    <li class=\"list-group-item px-0\">\n                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.\n                                    </li>\n                                    <li class=\"list-group-item px-0\">\n                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.\n                                    </li>\n                                  </ul> \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane fade\" id=\"tab-pane-3\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <h4 class=\"mb-4\">1 review for \"Product Name\"</h4>\n                                <div class=\"media mb-4\">\n                                    <img src=\"img/user.jpg\" alt=\"Image\" class=\"img-fluid mr-3 mt-1\" style=\"width: 45px;\">\n                                    <div class=\"media-body\">\n                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>\n                                        <div class=\"text-primary mb-2\">\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star\"></i>\n                                            <i class=\"fas fa-star-half-alt\"></i>\n                                            <i class=\"far fa-star\"></i>\n                                        </div>\n                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h4 class=\"mb-4\">Leave a review</h4>\n                                <small>Your email address will not be published. Required fields are marked *</small>\n                                <div class=\"d-flex my-3\">\n                                    <p class=\"mb-0 mr-2\">Your Rating * :</p>\n                                    <div class=\"text-primary\">\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                        <i class=\"far fa-star\"></i>\n                                    </div>\n                                </div>\n                                <form>\n                                    <div class=\"form-group\">\n                                        <label for=\"message\">Your Review *</label>\n                                        <textarea id=\"message\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"name\">Your Name *</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"email\">Your Email *</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"email\">\n                                    </div>\n                                    <div class=\"form-group mb-0\">\n                                        <input type=\"submit\" value=\"Leave Your Review\" class=\"btn btn-primary px-3\">\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Shop Detail End -->\n\n\n<!-- Products Start -->\n<div class=\"container-fluid py-5\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">You May Also Like</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col\">\n            <div class=\"owl-carousel related-carousel\">\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-1.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-2.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\"></a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-3.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-4.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"product-item bg-light\">\n                    <div class=\"product-img position-relative overflow-hidden\">\n                        <img class=\"img-fluid w-100\" src=\"img/product-5.jpg\" alt=\"\">\n                        <div class=\"product-action\">\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                            <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"text-center py-4\">\n                        <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                        <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                            <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small class=\"fa fa-star text-primary mr-1\"></small>\n                            <small>(99)</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Cart End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-user/display-user.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-user/display-user.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Shop</a>\n                <span class=\"breadcrumb-item active\">Profile</span>\n            </nav>\n        </div>\n    </div>\n</div>\n\n<div class=\"card\">\n    <img [src]=\"user.avatar\" alt=\"John\" style=\"width:100%\">\n    <h1 style=\"color:#17202A;\">{{user.firstName}} {{user.lastName}}</h1>\n    <p style=\"color:#EC7063 \" class=\"title\">{{user.email}}</p>\n    <p>{{user.role}}</p>\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button>Contact</button></p>\n  </div>\n \n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-annonce/edit-annonce.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-annonce/edit-annonce.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Edit Annonce</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5 \">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form [formGroup]=\"productForm\">\n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"description\" [(ngModel)]=\"prod.description\"  placeholder=\" description \"/> \n                    </div>\n                    <div *ngIf=\"productForm.controls['description'].invalid && \n                (productForm.controls['description'].touched || productForm.controls['description'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['description'].errors.required\">\n                  Description is required \n                </div>\n                </div>\n\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"price\" [(ngModel)]=\"prod.price\"  placeholder=\"price\" />\n                        \n                    </div>\n                    <div *ngIf=\"productForm.controls['price'].invalid && \n                (productForm.controls['price'].touched || productForm.controls['price'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['price'].errors.required\" style=\"color: red;\">\n                  price is required\n                </div>\n                <div *ngIf=\"productForm.controls['price'].errors.min\">\n                  price have must 1\n\n                </div>\n                </div>\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"qty\" [(ngModel)]=\"prod.qty\"  placeholder=\"qty\" />\n                        \n                    </div>\n                    <div *ngIf=\"productForm.controls['qty'].invalid && \n                (productForm.controls['qty'].touched || productForm.controls['qty'].dirty) \">\n\n                <div *ngIf=\"productForm.controls['qty'].errors.required\" style=\"color: red;\">\n                  Qty is required\n                </div>\n\n                <div *ngIf=\"productForm.controls['qty'].errors.min\">\n                    Qty must 1\n  \n                  </div>\n                \n                </div>\n                <div class=\"control-group form-group\">\n                <select class=\"custom-select\" formControlName=\"category\" [(ngModel)]=\"prod.category\" name=\"category\">\n                  <option selected>select category</option>\n                  <option value=\"electronic\">electronic</option>\n                  <option value=\"clothes\">clothes</option>\n                </select>\n              </div>\n              \n              <div class=\"text-center\">\n                <button class=\"btn btn-danger\" (click)=\"filePicker.click()\">Select your avatar</button>\n              </div>  \n\n              <div class=\"form-group\">\n                <input type=\"file\" class=\"form-control\" #filePicker (change)='onImageSelected($event)' style=\"visibility: hidden;\" >\n              </div>\n\n              <div class=\"text-center\" style=\"margin-bottom: 20px;\">\n                <img [src]=\"imagePreview\" *ngIf=\"imagePreview\" alt=\"avatar\">\n              </div>\n                    \n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\" (click)=\"editAnnonce()\" >Edit Annonce</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-user/edit-user.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-user/edit-user.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <span class=\"breadcrumb-item active\">Sign Up</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Contact Start -->\n<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Change Statu</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5\">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form [formGroup]=\"signupForm\" >\n                   \n\n\n                   \n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"statu\" [(ngModel)]=\"user.statu\" placeholder=\"statu\" />\n                        \n                    </div>\n\n              \n                  \n      \n                      \n                    \n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\" (click)=\"changeStatu()\" >statu</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        {{signupForm.value | json}} \n              {{signupForm.valid | json}} \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/featured/featured.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/featured/featured.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5 pb-3\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Featured Products</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\" *ngFor = \"let A of T\">\n            <app-annonce [annonce]=\"A\"></app-annonce>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-dark text-secondary mt-5 pt-5\">\n    <div class=\"row px-xl-5 pt-5\">\n        <div class=\"col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5\">\n            <h5 class=\"text-secondary text-uppercase mb-4\">Get In Touch</h5>\n            <p class=\"mb-4\">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>\n            <p class=\"mb-2\"><i class=\"fa fa-map-marker-alt text-primary mr-3\"></i>123 Street, New York, USA</p>\n            <p class=\"mb-2\"><i class=\"fa fa-envelope text-primary mr-3\"></i>info@example.com</p>\n            <p class=\"mb-0\"><i class=\"fa fa-phone-alt text-primary mr-3\"></i>+012 345 67890</p>\n        </div>\n        <div class=\"col-lg-8 col-md-12\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-5\">\n                    <h5 class=\"text-secondary text-uppercase mb-4\">Quick Shop</h5>\n                    <div class=\"d-flex flex-column justify-content-start\">\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Home</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Our Shop</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Shop Detail</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Shopping Cart</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Checkout</a>\n                        <a class=\"text-secondary\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Contact Us</a>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mb-5\">\n                    <h5 class=\"text-secondary text-uppercase mb-4\">My Account</h5>\n                    <div class=\"d-flex flex-column justify-content-start\">\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Home</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Our Shop</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Shop Detail</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Shopping Cart</a>\n                        <a class=\"text-secondary mb-2\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Checkout</a>\n                        <a class=\"text-secondary\" href=\"#\"><i class=\"fa fa-angle-right mr-2\"></i>Contact Us</a>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mb-5\">\n                    <h5 class=\"text-secondary text-uppercase mb-4\">Newsletter</h5>\n                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>\n                    <form action=\"\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-primary\">Sign Up</button>\n                            </div>\n                        </div>\n                    </form>\n                    <h6 class=\"text-secondary text-uppercase mt-4 mb-3\">Follow Us</h6>\n                    <div class=\"d-flex\">\n                        <a class=\"btn btn-primary btn-square mr-2\" href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n                        <a class=\"btn btn-primary btn-square mr-2\" href=\"#\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a class=\"btn btn-primary btn-square mr-2\" href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a>\n                        <a class=\"btn btn-primary btn-square\" href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row border-top mx-xl-5 py-4\" style=\"border-color: rgba(256, 256, 256, .1) !important;\">\n        <div class=\"col-md-6 px-xl-0\">\n            <p class=\"mb-md-0 text-center text-md-left text-secondary\">\n                &copy; <a class=\"text-primary\" href=\"#\">Domain</a>. All Rights Reserved. Designed\n                by\n                <a class=\"text-primary\" href=\"https://htmlcodex.com\">HTML Codex</a>\n            </p>\n        </div>\n        <div class=\"col-md-6 px-xl-0 text-center text-md-right\">\n            <img class=\"img-fluid\" src=\"assets/img/payments.png\" alt=\"\">\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- Topbar Start -->\n    <div class=\"container-fluid\">\n        <div class=\"row bg-secondary py-1 px-xl-5\">\n            <div class=\"col-lg-6 d-none d-lg-block\">\n                <div class=\"d-inline-flex align-items-center h-100\">\n                    <a class=\"text-body mr-3\" href=\"\">About</a>\n                    <a class=\"text-body mr-3\" href=\"\">Contact</a>\n                    <a class=\"text-body mr-3\" href=\"\">Help</a>\n                    <a class=\"text-body mr-3\" href=\"\">FAQs</a>\n                </div>\n            </div>\n            <div class=\"col-lg-6 text-center text-lg-right\">\n                <div class=\"d-inline-flex align-items-center\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle\" data-toggle=\"dropdown\">My Account</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <button class=\"dropdown-item\" type=\"button\">Sign in</button>\n                            <button class=\"dropdown-item\" type=\"button\">Sign up</button>\n                        </div>\n                    </div>\n                    <div class=\"btn-group mx-2\">\n                        <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle\" data-toggle=\"dropdown\">USD</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <button class=\"dropdown-item\" type=\"button\">EUR</button>\n                            <button class=\"dropdown-item\" type=\"button\">GBP</button>\n                            <button class=\"dropdown-item\" type=\"button\">CAD</button>\n                        </div>\n                    </div>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle\" data-toggle=\"dropdown\">EN</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <button class=\"dropdown-item\" type=\"button\">FR</button>\n                            <button class=\"dropdown-item\" type=\"button\">AR</button>\n                            <button class=\"dropdown-item\" type=\"button\">RU</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"d-inline-flex align-items-center d-block d-lg-none\">\n                    <a href=\"\" class=\"btn px-0 ml-2\">\n                        <i class=\"fas fa-heart text-dark\"></i>\n                        <span class=\"badge text-dark border border-dark rounded-circle\" style=\"padding-bottom: 2px;\">0</span>\n                    </a>\n                    <a href=\"\" class=\"btn px-0 ml-2\">\n                        <i class=\"fas fa-shopping-cart text-dark\"></i>\n                        <span class=\"badge text-dark border border-dark rounded-circle\" style=\"padding-bottom: 2px;\">0</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex\">\n            <div class=\"col-lg-4\">\n                <a href=\"\" class=\"text-decoration-none\">\n                    <span class=\"h1 text-uppercase text-primary bg-dark px-2\">Multi</span>\n                    <span class=\"h1 text-uppercase text-dark bg-primary px-2 ml-n1\">Shop</span>\n                </a>\n            </div>\n            <div class=\"col-lg-4 col-6 text-left\">\n                <form action=\"\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search for products\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text bg-transparent text-primary\">\n                                <i class=\"fa fa-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-lg-4 col-6 text-right\">\n                <p class=\"m-0\">Customer Service</p>\n                <h5 class=\"m-0\">+012 345 6789</h5>\n            </div>\n        </div>\n    </div>\n    <!-- Topbar End -->\n  \n  \n    <!-- Navbar Start -->\n    <div class=\"container-fluid bg-dark mb-30\">\n        <div class=\"row px-xl-5\">\n            <div class=\"col-lg-3 d-none d-lg-block\">\n                <a class=\"btn d-flex align-items-center justify-content-between bg-primary w-100\" data-toggle=\"collapse\" href=\"#navbar-vertical\" style=\"height: 65px; padding: 0 30px;\">\n                    <h6 class=\"text-dark m-0\"><i class=\"fa fa-bars mr-2\"></i>Categories</h6>\n                    <i class=\"fa fa-angle-down text-dark\"></i>\n                </a>\n                <nav class=\"collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light\" id=\"navbar-vertical\" style=\"width: calc(100% - 30px); z-index: 999;\">\n                    <div class=\"navbar-nav w-100\">\n                        <div class=\"nav-item dropdown dropright\">\n                            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Dresses <i class=\"fa fa-angle-right float-right mt-1\"></i></a>\n                            <div class=\"dropdown-menu position-absolute rounded-0 border-0 m-0\">\n                                <a href=\"\" class=\"dropdown-item\">Men's Dresses</a>\n                                <a href=\"\" class=\"dropdown-item\">Women's Dresses</a>\n                                <a href=\"\" class=\"dropdown-item\">Baby's Dresses</a>\n                            </div>\n                        </div>\n                        <a href=\"\" class=\"nav-item nav-link\">Shirts</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Jeans</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Swimwear</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Sleepwear</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Sportswear</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Jumpsuits</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Blazers</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Jackets</a>\n                        <a href=\"\" class=\"nav-item nav-link\">Shoes</a>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-lg-9\">\n                <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0\">\n                    <a href=\"\" class=\"text-decoration-none d-block d-lg-none\">\n                        <span class=\"h1 text-uppercase text-dark bg-light px-2\">Multi</span>\n                        <span class=\"h1 text-uppercase text-light bg-primary px-2 ml-n1\">Shop</span>\n                    </a>\n                    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-between\" id=\"navbarCollapse\">\n                        <div class=\"navbar-nav mr-auto py-0\">\n                            <a routerLink=\"\" class=\"nav-item nav-link active\">Home</a>\n                            <a routerLink=\"shop\" class=\"nav-item nav-link\" >Shop</a>\n                            <a href=\"detail.html\" class=\"nav-item nav-link\" ></a>\n                            <a routerLink=\"addProduct\" class=\"nav-item nav-link\" *ngIf=\"clientIsAuthenticated\">add Product</a>\n                            <a routerLink=\"dashbord\" class=\"nav-item nav-link\" *ngIf=\"adminIsAuthenticated\">Dashbord</a>\n                            <a routerLink=\"\" class=\"nav-item nav-link\" (click)=\"userObj()\" *ngIf=\"clientIsAuthenticated\">Dashbord</a>\n                            <a routerLink=\"\" class=\"nav-item nav-link\" (click)=\"goToUserOrder()\" *ngIf=\"UserIsAuthenticated\">Dashbord</a>\n                            \n                            \n                            <a routerLink=\"login\" class=\"nav-item nav-link\"  *ngIf=\"!userIsAuthenticated\">Login</a>\n                            \n                            <div class=\"nav-item dropdown\" *ngIf=\"!userIsAuthenticated\">\n                                <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Sign up <i class=\"fa fa-angle-down mt-1\"></i></a>\n                                <div class=\"dropdown-menu bg-primary rounded-0 border-0 m-0\">\n                                    <a routerLink=\"registerAdmin\" class=\"dropdown-item\">Sign Up Admin</a>\n                                    <a routerLink=\"registerClient\" class=\"dropdown-item\">Sign Up Client</a>\n                                    <a routerLink=\"register\" class=\"dropdown-item\">Sign Up User</a>\n                                </div>\n                            </div>\n                            <a routerLink=\"contact\" class=\"nav-item nav-link\" *ngIf=\"adminIsAuthenticated || !userIsAuthenticated || clientIsAuthenticated\">Contact</a>\n                            <a  (click)=\"onLogout()\" *ngIf=\"userIsAuthenticated\" class=\"nav-item nav-link\">Logout</a>\n                        </div>\n                        <div class=\"navbar-nav ml-auto py-0 d-none d-lg-block\">\n                            <a href=\"\" class=\"btn px-0\">\n                                <i class=\"fas fa-heart text-primary\"></i>\n                                <span class=\"badge text-secondary border border-secondary rounded-circle\" style=\"padding-bottom: 2px;\">0</span>\n                            </a>\n                            <a href=\"\" class=\"btn px-0 ml-3\">\n                                <i class=\"fas fa-shopping-cart text-primary\"></i>\n                                <span class=\"badge text-secondary border border-secondary rounded-circle\" style=\"padding-bottom: 2px;\">0</span>\n                            </a>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <!-- Navbar End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n<app-categories></app-categories>\n<app-featured></app-featured>\n<app-offer></app-offer>\n<app-recent></app-recent>\n<app-vendor></app-vendor>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <span class=\"breadcrumb-item active\">Login</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Contact Start -->\n<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Login</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5\">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"validateLogin()\">\n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\"  name=\"email\"  placeholder=\"Your Email\"\n                        name=\"email\" #email=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': loginForm.submitted && email.invalid }\" required email>\n                    </div>\n                    <div *ngIf=\"loginForm.submitted && email.invalid\" class=\"invalidfeedback\">\n                        <p *ngIf=\"email.errors.required\">Email is required</p>\n                        <p *ngIf=\"email.errors.email\">Email format is invalid </p>\n                        </div>\n                    <div class=\"control-group form-group\">\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.pwd\"  name=\"pwd\" #pwd=\"ngModel\" required pwd placeholder=\"Your password\"/>\n                    </div>\n                    <div *ngIf=\"loginForm.submitted && pwd.invalid\" class=\"invalidfeedback\">\n                        <p *ngIf=\"pwd.errors.required\">password is required</p>\n                        \n                        </div>\n                        <span style=\"color: red;\">{{errormsg}}</span>\n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\">Login</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/offer/offer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/offer/offer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5 pb-3\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-md-6\">\n            <div class=\"product-offer mb-30\" style=\"height: 300px;\">\n                <img class=\"img-fluid\" src=\"assets/img/offer-1.jpg\" alt=\"\">\n                <div class=\"offer-text\">\n                    <h6 class=\"text-white text-uppercase\">Save 20%</h6>\n                    <h3 class=\"text-white mb-3\">Special Offer</h3>\n                    <a href=\"\" class=\"btn btn-primary\">Shop Now</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"product-offer mb-30\" style=\"height: 300px;\">\n                <img class=\"img-fluid\" src=\"assets/img/offer-2.jpg\" alt=\"\">\n                <div class=\"offer-text\">\n                    <h6 class=\"text-white text-uppercase\">Save 20%</h6>\n                    <h3 class=\"text-white mb-3\">Special Offer</h3>\n                    <a href=\"\" class=\"btn btn-primary\">Shop Now</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order-client/order-client.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order-client/order-client.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">Name Annonce</th>\n            \n            <th scope=\"col\">Qty reservée</th>\n            <th scope=\"col\"> price</th>\n            <th scope=\"col\"> qty en stoke</th>\n            <th scope=\"col\"> name User</th>\n            <th scope=\"col\"> Eamil</th>\n            \n            <th scope=\"col\">Action</th>\n           \n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of T\">\n            <td>{{item.annonce[0].description}}</td>\n            <td>{{item.qty}}</td>\n            <td>{{item.annonce[0].price}}</td>\n            <td>{{item.annonce[0].qty}}</td>\n            <td>{{item.user[0].firstName}}</td>\n            <td>{{item.user[0].email}}</td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    <button class=\" btn-warning \" (click)=\"gotoEdit(item.id)\">Edit</button>\n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order-table/order-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order-table/order-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">id comande</th>\n            <th scope=\"col\">Name Annonce</th>\n            <th scope=\"col\">id Annonce</th>\n           \n            <th scope=\"col\">Qty reservée</th>\n            <th scope=\"col\"> price</th>\n            <th scope=\"col\"> qty en stoke</th>\n            <th scope=\"col\"> name client</th>\n            <th scope=\"col\"> email client</th>\n            \n            <th scope=\"col\">Action</th>\n           \n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of T\">\n            <td>{{item._id}}</td>\n            <td>{{item.annonce[0].description}}</td>\n            <td>{{item.annonce[0]._id}}</td>\n            \n            <td>{{item.qty}}</td>\n            <td>{{item.annonce[0].price}}</td>\n            <td>{{item.annonce[0].qty}}</td>\n            <td>{{item.user[0].firstName}}</td>\n            <td>{{item.user[0].email}}</td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                    \n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"delete(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recent/recent.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recent/recent.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5 pb-3\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Recent Products</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-1.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-2.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star-half-alt text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-3.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star-half-alt text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-4.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-5.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-6.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star-half-alt text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-7.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star-half-alt text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 pb-1\">\n            <div class=\"product-item bg-light mb-4\">\n                <div class=\"product-img position-relative overflow-hidden\">\n                    <img class=\"img-fluid w-100\" src=\"assets/img/product-8.jpg\" alt=\"\">\n                    <div class=\"product-action\">\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-shopping-cart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"far fa-heart\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-sync-alt\"></i></a>\n                        <a class=\"btn btn-outline-dark btn-square\" href=\"\"><i class=\"fa fa-search\"></i></a>\n                    </div>\n                </div>\n                <div class=\"text-center py-4\">\n                    <a class=\"h6 text-decoration-none text-truncate\" href=\"\">Product Name Goes Here</a>\n                    <div class=\"d-flex align-items-center justify-content-center mt-2\">\n                        <h5>$123.00</h5><h6 class=\"text-muted ml-2\"><del>$123.00</del></h6>\n                    </div>\n                    <div class=\"d-flex align-items-center justify-content-center mb-1\">\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"fa fa-star text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small class=\"far fa-star text-primary mr-1\"></small>\n                        <small>(99)</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/shop.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Shop</a>\n                <span class=\"breadcrumb-item active\">Shop List</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Shop Start -->\n<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <!-- Shop Sidebar Start -->\n        <div class=\"col-lg-3 col-md-4\">\n            <!-- Price Start -->\n            <h5 class=\"section-title position-relative text-uppercase mb-3\"><span class=\"bg-secondary pr-3\">Filter by price</span></h5>\n            <div class=\"bg-light p-4 mb-30\">\n                <form>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"price-all\">\n                        <label class=\"custom-control-label\" for=\"price-all\">All Price</label>\n                        <span class=\"badge border font-weight-normal\">1000</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\"   class=\"custom-control-input\" id=\"price-1\">\n                        <label class=\"custom-control-label\" for=\"price-1\">$0 - $100</label>\n                        <span class=\"badge border font-weight-normal\">150</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-2\">\n                        <label class=\"custom-control-label\" for=\"price-2\">$100 - $200</label>\n                        <span class=\"badge border font-weight-normal\">295</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-3\">\n                        <label class=\"custom-control-label\" for=\"price-3\">$200 - $300</label>\n                        <span class=\"badge border font-weight-normal\">246</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-4\">\n                        <label class=\"custom-control-label\" for=\"price-4\">$300 - $400</label>\n                        <span class=\"badge border font-weight-normal\">145</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"price-5\">\n                        <label class=\"custom-control-label\" for=\"price-5\">$400 - $500</label>\n                        <span class=\"badge border font-weight-normal\">168</span>\n                    </div>\n                </form>\n            </div>\n            <!-- Price End -->\n            \n            <!-- Color Start -->\n            <h5 class=\"section-title position-relative text-uppercase mb-3\"><span class=\"bg-secondary pr-3\">Filter by color</span></h5>\n            <div class=\"bg-light p-4 mb-30\">\n                <form>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"color-all\">\n                        <label class=\"custom-control-label\" for=\"price-all\">All Color</label>\n                        <span class=\"badge border font-weight-normal\">1000</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"color-1\">\n                        <label class=\"custom-control-label\" for=\"color-1\">Black</label>\n                        <span class=\"badge border font-weight-normal\">150</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"color-2\">\n                        <label class=\"custom-control-label\" for=\"color-2\">White</label>\n                        <span class=\"badge border font-weight-normal\">295</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"color-3\">\n                        <label class=\"custom-control-label\" for=\"color-3\">Red</label>\n                        <span class=\"badge border font-weight-normal\">246</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"color-4\">\n                        <label class=\"custom-control-label\" for=\"color-4\">Blue</label>\n                        <span class=\"badge border font-weight-normal\">145</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"color-5\">\n                        <label class=\"custom-control-label\" for=\"color-5\">Green</label>\n                        <span class=\"badge border font-weight-normal\">168</span>\n                    </div>\n                </form>\n            </div>\n            <!-- Color End -->\n\n            <!-- Size Start -->\n            <h5 class=\"section-title position-relative text-uppercase mb-3\"><span class=\"bg-secondary pr-3\">Filter by size</span></h5>\n            <div class=\"bg-light p-4 mb-30\">\n                <form>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"size-all\">\n                        <label class=\"custom-control-label\" for=\"size-all\">All Size</label>\n                        <span class=\"badge border font-weight-normal\">1000</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-1\">\n                        <label class=\"custom-control-label\" for=\"size-1\">XS</label>\n                        <span class=\"badge border font-weight-normal\">150</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-2\">\n                        <label class=\"custom-control-label\" for=\"size-2\">S</label>\n                        <span class=\"badge border font-weight-normal\">295</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-3\">\n                        <label class=\"custom-control-label\" for=\"size-3\">M</label>\n                        <span class=\"badge border font-weight-normal\">246</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-4\">\n                        <label class=\"custom-control-label\" for=\"size-4\">L</label>\n                        <span class=\"badge border font-weight-normal\">145</span>\n                    </div>\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center justify-content-between\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"size-5\">\n                        <label class=\"custom-control-label\" for=\"size-5\">XL</label>\n                        <span class=\"badge border font-weight-normal\">168</span>\n                    </div>\n                </form>\n            </div>\n            <!-- Size End -->\n        </div>\n        <!-- Shop Sidebar End -->\n\n\n        <!-- Shop Product Start -->\n        <div class=\"col-lg-9 col-md-8\">\n            <div class=\"row pb-3\">\n                <div class=\"col-12 pb-1\">\n                    <div class=\"d-flex align-items-center justify-content-between mb-4\">\n                        <div>\n                            <button class=\"btn btn-sm btn-light\"><i class=\"fa fa-th-large\"></i></button>\n                            <button class=\"btn btn-sm btn-light ml-2\"><i class=\"fa fa-bars\"></i></button>\n                        </div>\n                        <div class=\"ml-2\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle\" data-toggle=\"dropdown\">Sorting</button>\n                                \n                                    <select class=\"custom-select\" name=\"category\"  [(ngModel)]=\"term\">\n                                      <option selected>select category</option>\n                                      <option value=\"\" >All</option>\n                                      <option value=\"Home\">Home</option>\n                                      <option value=\"Clothes\">Clothes</option>\n                                      <option value=\"Electro\">Electro</option>\n                                    </select>\n                                  \n                            </div>\n                            <div class=\"btn-group ml-2\">\n                                <button type=\"button\" class=\"btn btn-sm btn-light dropdown-toggle\" data-toggle=\"dropdown\">Showing</button>\n                                <div class=\"dropdown-menu dropdown-menu-right\">\n                                    <a class=\"dropdown-item\" href=\"#\">10</a>\n                                    <a class=\"dropdown-item\" href=\"#\">20</a>\n                                    <a class=\"dropdown-item\" href=\"#\">30</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6 col-sm-6 pb-1\" *ngFor = \"let A of T | category : term\">\n                    <app-annonce [annonce]=\"A\"></app-annonce>\n                </div>\n                \n                <div class=\"col-12\">\n                    <nav>\n                      <ul class=\"pagination justify-content-center\">\n                        <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n                            <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n                       \n                      </ul>\n                    </nav>\n                </div>\n            </div>\n        </div>\n        <!-- Shop Product End -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row px-xl-5\">\n        <div class=\"col-12\">\n            <nav class=\"breadcrumb bg-light mb-30\">\n                <a class=\"breadcrumb-item text-dark\" href=\"#\">Home</a>\n                <span class=\"breadcrumb-item active\">Sign Up</span>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- Breadcrumb End -->\n\n\n<!-- Contact Start -->\n<div class=\"container-fluid\">\n    <h2 class=\"section-title position-relative text-uppercase mx-xl-5 mb-4\"><span class=\"bg-secondary pr-3\">Sign Up</span></h2>\n    <div class=\"row px-xl-5\">\n        <div class=\"col-lg-7 mb-5\">\n            <div class=\"contact-form bg-light p-30\">\n                <div id=\"success\"></div>\n                <form [formGroup]=\"signupForm\" >\n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"  placeholder=\" first Name\" />\n                        \n                    </div>\n                    <div *ngIf=\"signupForm.controls['firstName'].invalid && \n                (signupForm.controls['firstName'].touched || signupForm.controls['firstName'].dirty) \">\n\n                <div *ngIf=\"signupForm.controls['firstName'].errors.required\">\n                  First Name is required\n                </div>\n                <div *ngIf=\"signupForm.controls['firstName'].errors.minlength\">\n                  First Name must have at least 3 chars\n\n                </div>\n                </div>\n\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"  placeholder=\"last Name\" />\n                        \n                    </div>\n                    <div *ngIf=\"signupForm.controls['lastName'].invalid && \n                (signupForm.controls['lastName'].touched || signupForm.controls['lastName'].dirty) \">\n\n                <div *ngIf=\"signupForm.controls['lastName'].errors.required\" style=\"color: red;\">\n                  Last Name is required\n                </div>\n                <div *ngIf=\"signupForm.controls['lastName'].errors.minlength\">\n                  last Name must have at least 4 chars\n\n                </div>\n                </div>\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"  placeholder=\"Your Email\" />\n                        \n                    </div>\n                    <div *ngIf=\"signupForm.controls['email'].invalid && \n                (signupForm.controls['email'].touched || signupForm.controls['email'].dirty) \">\n\n                <div *ngIf=\"signupForm.controls['email'].errors.required\" style=\"color: red;\">\n                  Email is required\n                </div>\n                <div *ngIf=\"signupForm.controls['email'].errors.email\">\n                  Email invalid\n                </div>\n                <div style=\"color: red;\" *ngIf=\"signupForm.controls['email'].errors.pattern\">\n                  Email pattern invalid\n                </div>\n                </div>\n                <span style=\"color: red;\">{{msgError}}</span>\n                <div class=\"form-group\">\n                  <input class=\"form-control\" formControlName=\"Tel\" name=\"subject\"  type=\"text\"  placeholder='enter your Tel'>\n                </div>\n                <div *ngIf=\"signupForm.controls['Tel'].invalid \n                && (signupForm.controls['Tel'].touched || signupForm.controls['Tel'].dirty)\">\n  \n                <div *ngIf=\"signupForm.controls['Tel'].errors.required\" style=\"color: red;\">\n                Tel invalid is required\n                </div>\n                \n                  <div *ngIf=\"signupForm.controls['Tel'].errors.pattern\" style=\"color: blue;\">\n                      Tel have equal 8 number \n                      </div>\n            </div>\n\n\n\n                    <div class=\"control-group form-group\">\n                        <input type=\"password\" class=\"form-control\" formControlName=\"pwd\"  placeholder=\"Password\" />\n                        \n                    </div>\n                    <div *ngIf=\"signupForm.controls['pwd'].invalid && \n                    (signupForm.controls['pwd'].touched || signupForm.controls['pwd'].dirty) \">\n    \n                    <div *ngIf=\"signupForm.controls['pwd'].errors.required\">\n                      password Name is required\n                    </div>\n                    <div *ngIf=\"signupForm.controls['pwd'].errors.minlength\">\n                      password  must have in 6 chars \n                    </div>\n                    <div *ngIf=\"signupForm.controls['pwd'].errors.maxlength\">\n                      password must have in 12 chars \n                    </div>\n                    </div>\n                    <div class=\"control-group form-group\">\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPwd\"  placeholder=\"confirm Password\" />\n                        \n                    </div>\n\n                    <div class=\"text-center\">\n                        <button class=\"btn btn-danger\" (click)=\"filePicker.click()\">Select your avatar</button>\n                      </div>  \n      \n                      <div class=\"form-group\">\n                        <input type=\"file\" class=\"form-control\" #filePicker (change)='onImageSelected($event)' style=\"visibility: hidden;\" >\n                      </div>\n      \n                      <div class=\"text-center\" style=\"margin-bottom: 20px;\">\n                        <img [src]=\"imagePreview\" *ngIf=\"imagePreview\" alt=\"avatar\">\n                      </div>\n                    \n                    <div>\n                        <button class=\"btn btn-primary py-2 px-4\" type=\"submit\" (click)=\"signup()\" >Sign Up</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        {{signupForm.value | json}} \n              {{signupForm.valid | json}} \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-table/user-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-table/user-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" name=\"value\" placeholder=\"Search\"\n        style=\"margin: 20px; width: 80%;\">\n</form>\n<div>\n<table class=\"table text-center\">\n    <thead>\n        <tr >\n            <th scope=\"col\">first Name</th>\n            <th scope=\"col\">last Name</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Tel</th>\n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n    \n        </tr>\n    </thead>\n    <tbody id=\"\">\n        \n        <tr *ngFor=\"let item of pageOfItems | filterUser : term \">\n            <td>{{item.firstName}}</td>\n            <td>{{item.lastName}}</td>\n            <td>{{item.email}}</td>\n            <td>{{item.statu}}</td>\n            <td>{{item.Tel}}</td>\n           \n            <td><img [src]=\"item.avatar\" style=\"width:100px; height: 100px;\"></td>\n            \n            <td>\n                <button style=\"margin-right: 10px;\" class=\" btn-success\" (click)=\"gotoDisplay(item._id)\">Display</button>\n                <button style=\"margin-right: 10px;\" class=\"btn-info\" (click)=\"goToEdit(item._id)\">Status</button>\n                    <button style=\"margin-left: 10px;\" class=\" btn-danger\" (click)=\"DeleteUser(item._id)\">Delete</button>\n            </td>  \n        </tr>\n        \n    </tbody>\n   \n</table>\n<div  class=\"card-footer pb-0 pt-3\">\n    <jw-pagination [items]=\"T\" [pageSize]=\"5\" (changePage)=\"onChangePage($event)\"></jw-pagination>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/vendor/vendor.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/vendor/vendor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid py-5\">\n      <div class=\"row px-xl-5\">\n          <div class=\"col\">\n              <div class=\"owl-carousel vendor-carousel\">\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-1.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-2.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-3.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-4.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-5.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-6.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-7.jpg\" alt=\"\">\n                  </div>\n                  <div class=\"bg-light p-4\">\n                      <img src=\"assets/img/vendor-8.jpg\" alt=\"\">\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard-user/dashboard-user.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard-user/dashboard-user.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"margin-top:150px ;\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#prod\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">My orders</a>\n        </li>\n        \n       \n\n    </ul>\n    <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"prod\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <app-annonce-user-table></app-annonce-user-table>\n        </div>\n\n       \n        \n        \n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_dashboard_client_dashboard_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard-client/dashboard-client.component */ "./src/app/components/dashboard-client/dashboard-client.component.ts");
/* harmony import */ var _components_dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashbord/dashbord.component */ "./src/app/components/dashbord/dashbord.component.ts");
/* harmony import */ var _components_display_annonce_display_annonce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/display-annonce/display-annonce.component */ "./src/app/components/display-annonce/display-annonce.component.ts");
/* harmony import */ var _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/display-order/display-order.component */ "./src/app/components/display-order/display-order.component.ts");
/* harmony import */ var _components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/display-user/display-user.component */ "./src/app/components/display-user/display-user.component.ts");
/* harmony import */ var _components_edit_annonce_edit_annonce_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-annonce/edit-annonce.component */ "./src/app/components/edit-annonce/edit-annonce.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-user/dashboard-user.component */ "./src/app/dashboard-user/dashboard-user.component.ts");

















const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'register', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'registerAdmin', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'registerClient', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'addProduct', component: _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"] },
    { path: 'dashbord', component: _components_dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_6__["DashbordComponent"] },
    { path: 'dashboardClient/:id', component: _components_dashboard_client_dashboard_client_component__WEBPACK_IMPORTED_MODULE_5__["DashboardClientComponent"] },
    { path: 'displayUser/:id', component: _components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_9__["DisplayUserComponent"] },
    { path: 'displayAnnonce/:id', component: _components_display_annonce_display_annonce_component__WEBPACK_IMPORTED_MODULE_7__["DisplayAnnonceComponent"] },
    { path: 'editAnnonce/:id', component: _components_edit_annonce_edit_annonce_component__WEBPACK_IMPORTED_MODULE_10__["EditAnnonceComponent"] },
    { path: 'editUser/:id', component: _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"] },
    { path: 'dashboardUser/:id', component: _dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_16__["DashboardUserComponent"] },
    { path: 'displayOrder/:id', component: _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_8__["DisplayOrderComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_featured_featured_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/featured/featured.component */ "./src/app/components/featured/featured.component.ts");
/* harmony import */ var _components_offer_offer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/offer/offer.component */ "./src/app/components/offer/offer.component.ts");
/* harmony import */ var _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/recent/recent.component */ "./src/app/components/recent/recent.component.ts");
/* harmony import */ var _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/vendor/vendor.component */ "./src/app/components/vendor/vendor.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dashbord/dashbord.component */ "./src/app/components/dashbord/dashbord.component.ts");
/* harmony import */ var _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user-table/user-table.component */ "./src/app/components/user-table/user-table.component.ts");
/* harmony import */ var _components_annonce_table_annonce_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/annonce-table/annonce-table.component */ "./src/app/components/annonce-table/annonce-table.component.ts");
/* harmony import */ var _components_dashboard_client_dashboard_client_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashboard-client/dashboard-client.component */ "./src/app/components/dashboard-client/dashboard-client.component.ts");
/* harmony import */ var _components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/display-user/display-user.component */ "./src/app/components/display-user/display-user.component.ts");
/* harmony import */ var _components_display_annonce_display_annonce_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/display-annonce/display-annonce.component */ "./src/app/components/display-annonce/display-annonce.component.ts");
/* harmony import */ var _components_edit_annonce_edit_annonce_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/edit-annonce/edit-annonce.component */ "./src/app/components/edit-annonce/edit-annonce.component.ts");
/* harmony import */ var _components_annonce_annonce_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/annonce/annonce.component */ "./src/app/components/annonce/annonce.component.ts");
/* harmony import */ var _components_order_client_order_client_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/order-client/order-client.component */ "./src/app/components/order-client/order-client.component.ts");
/* harmony import */ var _components_annonce_client_table_annonce_client_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/annonce-client-table/annonce-client-table.component */ "./src/app/components/annonce-client-table/annonce-client-table.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _pipes_filter_user_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/filter-user.pipe */ "./src/app/pipes/filter-user.pipe.ts");
/* harmony import */ var _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/filter-price.pipe */ "./src/app/pipes/filter-price.pipe.ts");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm2015/angular-confirmation-popover.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/fesm2015/jw-angular-pagination.js");
/* harmony import */ var _components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/order-table/order-table.component */ "./src/app/components/order-table/order-table.component.ts");
/* harmony import */ var _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/category.pipe */ "./src/app/pipes/category.pipe.ts");
/* harmony import */ var _dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dashboard-user/dashboard-user.component */ "./src/app/dashboard-user/dashboard-user.component.ts");
/* harmony import */ var _components_annonce_user_table_annonce_user_table_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/annonce-user-table/annonce-user-table.component */ "./src/app/components/annonce-user-table/annonce-user-table.component.ts");
/* harmony import */ var _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/display-order/display-order.component */ "./src/app/components/display-order/display-order.component.ts");









































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
            _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
            _components_featured_featured_component__WEBPACK_IMPORTED_MODULE_11__["FeaturedComponent"],
            _components_offer_offer_component__WEBPACK_IMPORTED_MODULE_12__["OfferComponent"],
            _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_13__["RecentComponent"],
            _components_vendor_vendor_component__WEBPACK_IMPORTED_MODULE_14__["VendorComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_16__["ShopComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
            _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AddProductComponent"],
            _components_dashbord_dashbord_component__WEBPACK_IMPORTED_MODULE_21__["DashbordComponent"],
            _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_22__["UserTableComponent"],
            _components_annonce_table_annonce_table_component__WEBPACK_IMPORTED_MODULE_23__["AnnonceTableComponent"],
            _components_dashboard_client_dashboard_client_component__WEBPACK_IMPORTED_MODULE_24__["DashboardClientComponent"],
            _components_display_user_display_user_component__WEBPACK_IMPORTED_MODULE_25__["DisplayUserComponent"],
            _components_display_annonce_display_annonce_component__WEBPACK_IMPORTED_MODULE_26__["DisplayAnnonceComponent"],
            _components_edit_annonce_edit_annonce_component__WEBPACK_IMPORTED_MODULE_27__["EditAnnonceComponent"],
            _components_annonce_annonce_component__WEBPACK_IMPORTED_MODULE_28__["AnnonceComponent"],
            _components_order_client_order_client_component__WEBPACK_IMPORTED_MODULE_29__["OrderClientComponent"],
            _components_annonce_client_table_annonce_client_table_component__WEBPACK_IMPORTED_MODULE_30__["AnnonceClientTableComponent"],
            _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_31__["EditUserComponent"],
            _pipes_filter_user_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterUserPipe"],
            _pipes_filter_price_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterPricePipe"],
            _components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_36__["OrderTableComponent"],
            _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_37__["CategoryPipe"],
            _dashboard_user_dashboard_user_component__WEBPACK_IMPORTED_MODULE_38__["DashboardUserComponent"],
            _components_annonce_user_table_annonce_user_table_component__WEBPACK_IMPORTED_MODULE_39__["AnnonceUserTableComponent"],
            _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_40__["DisplayOrderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_35__["JwPaginationModule"],
            angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_34__["ConfirmationPopoverModule"].forRoot({
                confirmButtonType: 'danger',
            }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-product/add-product.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-product/add-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");





let AddProductComponent = class AddProductComponent {
    constructor(formBuilder, annonceService, router) {
        this.formBuilder = formBuilder;
        this.annonceService = annonceService;
        this.router = router;
    }
    ngOnInit() {
        this.actualDate = new Date();
        this.userId = localStorage.getItem("userId");
        console.log("here user id", this.userId);
        this.productForm = this.formBuilder.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            category: [''],
            img: [''],
        });
    }
    addProduct() {
        var d = new Date();
        var date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
        var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        this.fullDate = date + ' ' + hours;
        console.log(this.fullDate);
        this.productForm.value.userId = this.userId;
        console.log("here product", this.productForm.value);
        this.productForm.value.date = this.fullDate;
        console.log("here date", this.productForm.value.date);
        this.annonceService.addAnnonce(this.productForm.value, this.productForm.value.img).subscribe((response) => {
            console.log("here response after add annonce", response.message);
            if (response.message == 'not access') {
                alert(response.message);
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        this.productForm.patchValue({ img: file });
        this.productForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-product/add-product.component.html"),
        styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/components/add-product/add-product.component.css")]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/components/annonce-client-table/annonce-client-table.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/annonce-client-table/annonce-client-table.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub25jZS1jbGllbnQtdGFibGUvYW5ub25jZS1jbGllbnQtdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/annonce-client-table/annonce-client-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/annonce-client-table/annonce-client-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnnonceClientTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceClientTableComponent", function() { return AnnonceClientTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");




let AnnonceClientTableComponent = class AnnonceClientTableComponent {
    constructor(annonceService, activatedRoute, router) {
        this.annonceService = annonceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.myAnnonce = [];
        this.V = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.annonceService.getAnnonceByUser(this.id).subscribe((response) => {
            this.V = response.annonces;
        });
        // this.userId = localStorage.getItem("userId");
        // this.annonceService.getAllAnnonce().subscribe((response)=> {
        //   this.V = response.annonces;
        //      for (var i = 0; i < this.V.length; i++) {
        //        if (this.V[i].userId == this.userId) {
        //         this.myAnnonce.push(this.V[i]);
        //        console.log("here my annonce",this.myAnnonce);
        //        }
        //    }
        // });
        //   this.myAnnonce= this.V.filter(function(el){
        //     return el.userId == userId;
        // });
        // console.log(this.myAnnonce);
    }
    gotoDisplay(id) {
        this.router.navigate([`displayAnnonce/${id}`]);
    }
    gotoEdit(id) {
        this.router.navigate([`editAnnonce/${id}`]);
    }
    delete(id) {
        this.annonceService.deleteAnnonce(id).subscribe((response) => {
            console.log('here delete res', response.message);
        });
        this.annonceService.getAnnonceByUser(this.id).subscribe((response) => {
            this.V = response.annonces;
        });
    }
};
AnnonceClientTableComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AnnonceClientTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-annonce-client-table',
        template: __webpack_require__(/*! raw-loader!./annonce-client-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/annonce-client-table/annonce-client-table.component.html"),
        styles: [__webpack_require__(/*! ./annonce-client-table.component.css */ "./src/app/components/annonce-client-table/annonce-client-table.component.css")]
    })
], AnnonceClientTableComponent);



/***/ }),

/***/ "./src/app/components/annonce-table/annonce-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/annonce-table/annonce-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub25jZS10YWJsZS9hbm5vbmNlLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/annonce-table/annonce-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/annonce-table/annonce-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnnonceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceTableComponent", function() { return AnnonceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");




let AnnonceTableComponent = class AnnonceTableComponent {
    constructor(annonceService, router) {
        this.annonceService = annonceService;
        this.router = router;
        this.V = [];
    }
    ngOnInit() {
        this.annonceService.getAllAnnonce().subscribe((response) => {
            this.V = response.annonces;
        });
    }
    delete(id) {
        this.annonceService.deleteAnnonce(id).subscribe((response) => {
            console.log('here delete res', response.message);
        });
        this.annonceService.getAllAnnonce().subscribe((response) => {
            this.V = response.annonces;
        });
    }
    gotoDisplay(id) {
        this.router.navigate([`displayAnnonce/${id}`]);
    }
};
AnnonceTableComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AnnonceTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-annonce-table',
        template: __webpack_require__(/*! raw-loader!./annonce-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/annonce-table/annonce-table.component.html"),
        styles: [__webpack_require__(/*! ./annonce-table.component.css */ "./src/app/components/annonce-table/annonce-table.component.css")]
    })
], AnnonceTableComponent);



/***/ }),

/***/ "./src/app/components/annonce-user-table/annonce-user-table.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/annonce-user-table/annonce-user-table.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub25jZS11c2VyLXRhYmxlL2Fubm9uY2UtdXNlci10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/annonce-user-table/annonce-user-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/annonce-user-table/annonce-user-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AnnonceUserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceUserTableComponent", function() { return AnnonceUserTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/order.service */ "./src/app/sevices/order.service.ts");




let AnnonceUserTableComponent = class AnnonceUserTableComponent {
    constructor(OrderService, activatedRoute) {
        this.OrderService = OrderService;
        this.activatedRoute = activatedRoute;
        this.T = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.OrderService.getUserOder(this.id).subscribe((response) => {
            console.log("here oders users ", response.myorder);
            this.T = response.myorder;
        });
    }
};
AnnonceUserTableComponent.ctorParameters = () => [
    { type: src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AnnonceUserTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-annonce-user-table',
        template: __webpack_require__(/*! raw-loader!./annonce-user-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/annonce-user-table/annonce-user-table.component.html"),
        styles: [__webpack_require__(/*! ./annonce-user-table.component.css */ "./src/app/components/annonce-user-table/annonce-user-table.component.css")]
    })
], AnnonceUserTableComponent);



/***/ }),

/***/ "./src/app/components/annonce/annonce.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/annonce/annonce.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".min{\r\n    color: #4A84AF;\r\n    font-size: 20px;\r\n    \r\n  }\r\n  .moy{\r\n      color: #4A0A1F;\r\n      font-size: 30px;\r\n  }\r\n  .max{\r\n      color: #306A08 ;\r\n      font-size: 40px;\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbm5vbmNlL2Fubm9uY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlOztFQUVqQjtFQUNBO01BQ0ksY0FBYztNQUNkLGVBQWU7RUFDbkI7RUFDQTtNQUNJLGVBQWU7TUFDZixlQUFlOztFQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub25jZS9hbm5vbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlue1xyXG4gICAgY29sb3I6ICM0QTg0QUY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLm1veXtcclxuICAgICAgY29sb3I6ICM0QTBBMUY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLm1heHtcclxuICAgICAgY29sb3I6ICMzMDZBMDggO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/annonce/annonce.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/annonce/annonce.component.ts ***!
  \*********************************************************/
/*! exports provided: AnnonceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceComponent", function() { return AnnonceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AnnonceComponent = class AnnonceComponent {
    constructor(router) {
        this.router = router;
    }
    getAllAnnonce() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    gotoDisplay(id) {
        this.router.navigate([`displayAnnonce/${id}`]);
    }
    color(n) {
        if (n >= 0 && n <= 50) {
            return '1';
        }
        else if (n >= 50 && n <= 300) {
            return '2';
        }
        else
            return '3';
    }
};
AnnonceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnnonceComponent.prototype, "annonce", void 0);
AnnonceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-annonce',
        template: __webpack_require__(/*! raw-loader!./annonce.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/annonce/annonce.component.html"),
        styles: [__webpack_require__(/*! ./annonce.component.css */ "./src/app/components/annonce/annonce.component.css")]
    })
], AnnonceComponent);



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesComponent = class CategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/components/categories/categories.component.css")]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/dashboard-client/dashboard-client.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/dashboard-client/dashboard-client.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkLWNsaWVudC9kYXNoYm9hcmQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard-client/dashboard-client.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard-client/dashboard-client.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardClientComponent", function() { return DashboardClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");




let DashboardClientComponent = class DashboardClientComponent {
    constructor(annonceService, activatedRoute, router) {
        this.annonceService = annonceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.myAnnonce = [];
        this.V = [];
    }
    ngOnInit() {
        //  this.id = this.activatedRoute.snapshot.paramMap.get('id');
        //  this.annonceService.getAnnonceByUser(this.id).subscribe((response)=> {
        //      this.V = response.annonces;
        //       });
        // // this.userId = localStorage.getItem("userId");
        // this.annonceService.getAllAnnonce().subscribe((response)=> {
        //   this.V = response.annonces;
        //      for (var i = 0; i < this.V.length; i++) {
        //        if (this.V[i].userId == this.userId) {
        //         this.myAnnonce.push(this.V[i]);
        //        console.log("here my annonce",this.myAnnonce);
        //        }
        //    }
        // });
        //   this.myAnnonce= this.V.filter(function(el){
        //     return el.userId == userId;
        // });
        // console.log(this.myAnnonce);
    }
    gotoDisplay(id) {
        this.router.navigate([`displayAnnonce/${id}`]);
    }
};
DashboardClientComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_3__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-client',
        template: __webpack_require__(/*! raw-loader!./dashboard-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard-client/dashboard-client.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-client.component.css */ "./src/app/components/dashboard-client/dashboard-client.component.css")]
    })
], DashboardClientComponent);



/***/ }),

/***/ "./src/app/components/dashbord/dashbord.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/dashbord/dashbord.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvcmQvZGFzaGJvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashbord/dashbord.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dashbord/dashbord.component.ts ***!
  \***********************************************************/
/*! exports provided: DashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordComponent", function() { return DashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashbordComponent = class DashbordComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashbord',
        template: __webpack_require__(/*! raw-loader!./dashbord.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashbord/dashbord.component.html"),
        styles: [__webpack_require__(/*! ./dashbord.component.css */ "./src/app/components/dashbord/dashbord.component.css")]
    })
], DashbordComponent);



/***/ }),

/***/ "./src/app/components/display-annonce/display-annonce.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/display-annonce/display-annonce.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1hbm5vbmNlL2Rpc3BsYXktYW5ub25jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/display-annonce/display-annonce.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-annonce/display-annonce.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayAnnonceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayAnnonceComponent", function() { return DisplayAnnonceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");
/* harmony import */ var src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sevices/order.service */ "./src/app/sevices/order.service.ts");






let DisplayAnnonceComponent = class DisplayAnnonceComponent {
    constructor(annonceService, activatedRoute, formBuilder, orderService, router) {
        this.annonceService = annonceService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.router = router;
        this.annonce = {};
        this.placements = ['confirmation'];
        this.popoverTitle = 'Are you sure?';
        this.popoverMessage = 'Are you really <b>sure</b> you want to do this?';
        this.confirmText = 'Yes ';
        this.cancelText = 'No ';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.trackByValue = (index, value) => value;
    }
    ngOnInit() {
        this.userId = localStorage.getItem("userId");
        console.log("here user id", this.userId);
        this.orderForm = this.formBuilder.group({
            qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.annonceService.getAnnonceById(this.id).subscribe((response) => {
            this.annonce = response.annonce;
            console.log("here annonce", this.annonce);
        });
    }
    AddCommande() {
        this.orderForm.value.userId = this.userId;
        this.orderForm.value.annonceId = this.id;
        this.orderForm.value.clientId = this.annonce.userId;
        console.log("here order", this.orderForm.value);
        this.orderService.addOrder(this.orderForm.value).subscribe((response) => {
            console.log("here response after order", response.message);
            if (response.message == "quantité insuffisante") {
                this.msg = response.message;
                this.qty = `il reste ${response.annonce.qty} article`;
            }
            else {
                this.router.navigate(['']);
            }
        });
    }
};
DisplayAnnonceComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DisplayAnnonceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-annonce',
        template: `
  <button
    class="btn btn-outline-secondary"
    mwlConfirmationPopover
    [popoverTitle]="popoverTitle"
    [popoverMessage]="popoverMessage"
    (confirm)="confirmClicked = true"
    (cancel)="cancelClicked = true"
  >
    Click me!
  </button>
`,
        template: __webpack_require__(/*! raw-loader!./display-annonce.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-annonce/display-annonce.component.html"),
        styles: [__webpack_require__(/*! ./display-annonce.component.css */ "./src/app/components/display-annonce/display-annonce.component.css")]
    })
], DisplayAnnonceComponent);



/***/ }),

/***/ "./src/app/components/display-order/display-order.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/display-order/display-order.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1vcmRlci9kaXNwbGF5LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/display-order/display-order.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-order/display-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayOrderComponent", function() { return DisplayOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/order.service */ "./src/app/sevices/order.service.ts");




let DisplayOrderComponent = class DisplayOrderComponent {
    constructor(orderService, activatedRoute) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.T = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.orderService.getOrderById(this.id).subscribe((response) => {
            console.log("here display ordder", response.comande);
            this.T = response.comande;
        });
    }
};
DisplayOrderComponent.ctorParameters = () => [
    { type: src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DisplayOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-order',
        template: __webpack_require__(/*! raw-loader!./display-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-order/display-order.component.html"),
        styles: [__webpack_require__(/*! ./display-order.component.css */ "./src/app/components/display-order/display-order.component.css")]
    })
], DisplayOrderComponent);



/***/ }),

/***/ "./src/app/components/display-user/display-user.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/display-user/display-user.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n  }\r\n  \r\n  .title {\r\n    color: grey;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  button {\r\n    border: none;\r\n    outline: 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    font-size: 22px;\r\n    color: black;\r\n  }\r\n  \r\n  button:hover, a:hover {\r\n    opacity: 0.7;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LXVzZXIvZGlzcGxheS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS11c2VyL2Rpc3BsYXktdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciwgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/display-user/display-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/display-user/display-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: DisplayUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayUserComponent", function() { return DisplayUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");




let DisplayUserComponent = class DisplayUserComponent {
    constructor(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.id = {};
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userService.getUserById(this.id).subscribe((response) => {
            this.user = response.user;
            console.log("her user", this.user);
        });
    }
};
DisplayUserComponent.ctorParameters = () => [
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DisplayUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-user',
        template: __webpack_require__(/*! raw-loader!./display-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-user/display-user.component.html"),
        styles: [__webpack_require__(/*! ./display-user.component.css */ "./src/app/components/display-user/display-user.component.css")]
    })
], DisplayUserComponent);



/***/ }),

/***/ "./src/app/components/edit-annonce/edit-annonce.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-annonce/edit-annonce.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1hbm5vbmNlL2VkaXQtYW5ub25jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-annonce/edit-annonce.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-annonce/edit-annonce.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditAnnonceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnnonceComponent", function() { return EditAnnonceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");





let EditAnnonceComponent = class EditAnnonceComponent {
    constructor(annonceService, activatedRoute, router, formBuilder) {
        this.annonceService = annonceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.prod = {};
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            category: [''],
            img: [''],
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.annonceService.getAnnonceById(this.id).subscribe((response) => {
            this.prod = response.annonce;
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        this.productForm.patchValue({ img: file });
        this.productForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    editAnnonce() {
        this.annonceService.editAnnonceById(this.prod).subscribe((response) => {
            console.log("here response after edit", response.message);
            alert(this.id);
        });
        this.router.navigate(['']);
    }
};
EditAnnonceComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_4__["AnnonceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditAnnonceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-annonce',
        template: __webpack_require__(/*! raw-loader!./edit-annonce.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-annonce/edit-annonce.component.html"),
        styles: [__webpack_require__(/*! ./edit-annonce.component.css */ "./src/app/components/edit-annonce/edit-annonce.component.css")]
    })
], EditAnnonceComponent);



/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");





let EditUserComponent = class EditUserComponent {
    constructor(formBuilder, activatedRoute, userService, router) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            confirmPwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            img: [''],
            statu: ['']
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userService.getUserById(this.id).subscribe((response) => {
            this.user = response.user;
            console.log("her user", this.user);
        });
    }
    changeStatu() {
        this.userService.editUserById(this.user).subscribe((response) => {
            console.log("here edit with success", response.message);
        });
        this.router.navigate(['dashbord']);
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: __webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-user/edit-user.component.html"),
        styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/components/edit-user/edit-user.component.css")]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/components/featured/featured.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/featured/featured.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/featured/featured.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/featured/featured.component.ts ***!
  \***********************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");



let FeaturedComponent = class FeaturedComponent {
    constructor(annonceService) {
        this.annonceService = annonceService;
        this.T = [];
    }
    ngOnInit() {
        this.annonceService.getAllAnnonce().subscribe((response) => {
            this.T = response.annonces;
        });
    }
};
FeaturedComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_2__["AnnonceService"] }
];
FeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-featured',
        template: __webpack_require__(/*! raw-loader!./featured.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/featured/featured.component.html"),
        styles: [__webpack_require__(/*! ./featured.component.css */ "./src/app/components/featured/featured.component.css")]
    })
], FeaturedComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userIsAuthenticated = false;
        this.profileisSet = false;
        this.T = [];
        this.user = {};
    }
    ngOnInit() {
        this.userId = localStorage.getItem("userId");
        this.userService.getAllUsers().subscribe((response) => {
            this.T = response.users;
        });
        for (let i = 0; i < this.T.length; i++) {
            if (this.T[i].id == this.userId) {
                this.user = this.T[i];
            }
        }
        this.userIsAuthenticated = this.userService.getIsAuth();
        console.log('here auth', this.userIsAuthenticated);
        this.authListenerSubs = this.userService
            .getAuthStatusListener()
            .subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
        this.clientIsAuthenticated = this.userService.getIsAuthClient();
        console.log('here auth Client', this.clientIsAuthenticated);
        this.authClient = this.userService.getAuthClient().subscribe(isClient => {
            this.clientIsAuthenticated = isClient;
        });
        this.UserIsAuthenticated = this.userService.getIsAuthUser();
        console.log('here auth User', this.UserIsAuthenticated);
        this.authUser = this.userService.getAuthUser().subscribe(isUser => {
            this.UserIsAuthenticated = isUser;
        });
        this.adminIsAuthenticated = this.userService.getIsAuthAdmin();
        console.log('here auth Admin', this.adminIsAuthenticated);
        this.authAdmin = this.userService.getAuthAdmin().subscribe(isAdmin => {
            this.adminIsAuthenticated = isAdmin;
        });
    }
    onLogout() {
        this.userService.logout();
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
        this.authClient.unsubscribe();
        this.authUser.unsubscribe();
        this.authAdmin.unsubscribe();
        this.role = localStorage.getItem("userRole");
    }
    // header obj
    userObj() {
        let id = localStorage.getItem("userId");
        this.router.navigate([`dashboardClient/${id}`]);
    }
    goToUserOrder() {
        let id = localStorage.getItem("userId");
        this.router.navigate([`dashboardUser/${id}`]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");




let LoginComponent = class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
    }
    // login(){
    //   this.userService.login(this.user).subscribe((response) => {
    //     console.log("here response after login", response.message);
    //     console.log("here response after login", response.user);
    //     if (response.message == "2") {
    //       if (response.user.role == "Client") {
    //         this.router.navigate(['shop']);
    //       } else {
    //         this.router.navigate(['']);
    //       }
    //     } else {
    //       this.errormsg = "Please chek email or pwd"
    //     }
    //   })
    // }
    validateLogin() {
        this.userService.login(this.user.email, this.user.pwd);
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/offer/offer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/offer/offer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXIvb2ZmZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/offer/offer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/offer/offer.component.ts ***!
  \*****************************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OfferComponent = class OfferComponent {
    constructor() { }
    ngOnInit() {
    }
};
OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer',
        template: __webpack_require__(/*! raw-loader!./offer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/offer/offer.component.html"),
        styles: [__webpack_require__(/*! ./offer.component.css */ "./src/app/components/offer/offer.component.css")]
    })
], OfferComponent);



/***/ }),

/***/ "./src/app/components/order-client/order-client.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/order-client/order-client.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItY2xpZW50L29yZGVyLWNsaWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/order-client/order-client.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/order-client/order-client.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderClientComponent", function() { return OrderClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/order.service */ "./src/app/sevices/order.service.ts");




let OrderClientComponent = class OrderClientComponent {
    constructor(orderService, activatedRoute) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.T = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.id);
        this.orderService.getOrderByUser(this.id).subscribe((response) => {
            this.T = response.order;
            console.log("here order", this.T);
        });
    }
    delete(id) {
        this.orderService.deleteOrderById(id).subscribe((response) => {
            console.log('here delete res', response.message);
        });
        this.orderService.getOrderByUser(this.id).subscribe((response) => {
            this.T = response.order;
        });
    }
};
OrderClientComponent.ctorParameters = () => [
    { type: src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-client',
        template: __webpack_require__(/*! raw-loader!./order-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order-client/order-client.component.html"),
        styles: [__webpack_require__(/*! ./order-client.component.css */ "./src/app/components/order-client/order-client.component.css")]
    })
], OrderClientComponent);



/***/ }),

/***/ "./src/app/components/order-table/order-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/order-table/order-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItdGFibGUvb3JkZXItdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/order-table/order-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/order-table/order-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableComponent", function() { return OrderTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/order.service */ "./src/app/sevices/order.service.ts");




let OrderTableComponent = class OrderTableComponent {
    constructor(orderService, router, activatedRoute) {
        this.orderService = orderService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.T = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.orderService.getAllOder().subscribe((response) => {
            console.log("here response of all order ", response.comandes);
            this.T = response.comandes;
        });
    }
    gotoDisplay(id) {
        this.router.navigate([`displayOrder/${id}`]);
    }
    delete(id) {
        this.orderService.deleteOrderById(id).subscribe((response) => {
            console.log('here delete res', response.message);
        });
        this.orderService.getAllOder().subscribe((response) => {
            this.T = response.comandes;
        });
    }
};
OrderTableComponent.ctorParameters = () => [
    { type: src_app_sevices_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-table',
        template: __webpack_require__(/*! raw-loader!./order-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order-table/order-table.component.html"),
        styles: [__webpack_require__(/*! ./order-table.component.css */ "./src/app/components/order-table/order-table.component.css")]
    })
], OrderTableComponent);



/***/ }),

/***/ "./src/app/components/recent/recent.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recent/recent.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjZW50L3JlY2VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/recent/recent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recent/recent.component.ts ***!
  \*******************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecentComponent = class RecentComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recent',
        template: __webpack_require__(/*! raw-loader!./recent.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recent/recent.component.html"),
        styles: [__webpack_require__(/*! ./recent.component.css */ "./src/app/components/recent/recent.component.css")]
    })
], RecentComponent);



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sevices/annonce.service */ "./src/app/sevices/annonce.service.ts");



let ShopComponent = class ShopComponent {
    constructor(annonceService) {
        this.annonceService = annonceService;
        this.T = [];
    }
    ngOnInit() {
        this.annonceService.getAllAnnonce().subscribe((response) => {
            this.T = response.annonces;
        });
    }
};
ShopComponent.ctorParameters = () => [
    { type: src_app_sevices_annonce_service__WEBPACK_IMPORTED_MODULE_2__["AnnonceService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.path = this.router.url;
        if (this.path == "/registerAdmin") {
            this.signupForm = this.formBuilder.group({
                firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[admin]+\.[com]{3,4}$")]],
                Tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^((\\+216-?)|0)?[0-9]{8}$")]],
                pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                confirmPwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
                img: ['']
            });
        }
        else {
            this.signupForm = this.formBuilder.group({
                firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                Tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^((\\+216-?)|0)?[0-9]{8}$")]],
                pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
                confirmPwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
                img: ['']
            });
        }
    }
    //Validators.pattern("^[a-z0-9._%+-]+@[admin]+\.[com]{3,4}$")] ],
    signup() {
        if (this.path == "/register") {
            this.signupForm.value.role = "User";
            this.signupForm.value.statu = "true";
        }
        else if (this.path == "/registerClient") {
            this.signupForm.value.role = "Client";
            this.signupForm.value.statu = "false";
        }
        else {
            this.signupForm.value.role = "Admin";
            this.signupForm.value.statu = "true";
        }
        this.userService.singnUp(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
            console.log("here into user", response.message);
            if (response.message == "Email Exist") {
                this.msgError = response.message;
            }
            else {
                this.router.navigate(['login']);
            }
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        this.signupForm.patchValue({ img: file });
        this.signupForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/user-table/user-table.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci10YWJsZS91c2VyLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-table/user-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.ts ***!
  \***************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sevices/user.service */ "./src/app/sevices/user.service.ts");




let UserTableComponent = class UserTableComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.T = [];
    }
    ngOnInit() {
        this.userService.getAllUsers().subscribe((response) => {
            this.T = response.users;
        });
    }
    gotoDisplay(id) {
        this.router.navigate([`displayUser/${id}`]);
    }
    DeleteUser(id) {
        this.userService.deleteUserById(id).subscribe((response) => {
            console.log("here response after delete", response.message);
        });
        this.userService.getAllUsers().subscribe((response) => {
            this.T = response.users;
        });
    }
    goToEdit(id) {
        this.router.navigate([`editUser/${id}`]);
    }
    onChangePage(x) {
        // update current page of items
        this.pageOfItems = x;
    }
};
UserTableComponent.ctorParameters = () => [
    { type: src_app_sevices_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-table',
        template: __webpack_require__(/*! raw-loader!./user-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-table/user-table.component.html"),
        styles: [__webpack_require__(/*! ./user-table.component.css */ "./src/app/components/user-table/user-table.component.css")]
    })
], UserTableComponent);



/***/ }),

/***/ "./src/app/components/vendor/vendor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.ts ***!
  \*******************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VendorComponent = class VendorComponent {
    constructor() { }
    ngOnInit() {
    }
};
VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor',
        template: __webpack_require__(/*! raw-loader!./vendor.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/vendor/vendor.component.html"),
        styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/components/vendor/vendor.component.css")]
    })
], VendorComponent);



/***/ }),

/***/ "./src/app/dashboard-user/dashboard-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-user/dashboard-user.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC11c2VyL2Rhc2hib2FyZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-user/dashboard-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-user/dashboard-user.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUserComponent", function() { return DashboardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardUserComponent = class DashboardUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-user',
        template: __webpack_require__(/*! raw-loader!./dashboard-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard-user/dashboard-user.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-user.component.css */ "./src/app/dashboard-user/dashboard-user.component.css")]
    })
], DashboardUserComponent);



/***/ }),

/***/ "./src/app/pipes/category.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/category.pipe.ts ***!
  \****************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryPipe = class CategoryPipe {
    transform(objs, term) {
        if (term === undefined) {
            return objs;
        }
        return objs.filter((obj) => {
            return (obj.category.toLowerCase().includes(term.toLowerCase()));
        });
    }
};
CategoryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'category'
    })
], CategoryPipe);



/***/ }),

/***/ "./src/app/pipes/filter-price.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filter-price.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPricePipe", function() { return FilterPricePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPricePipe = class FilterPricePipe {
    transform(objs, term) {
        if (term === undefined) {
            return objs;
        }
        return objs.filter((obj) => {
            return (Number(obj.price) >= (term) || (obj.category) == (term));
        });
    }
};
FilterPricePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterPrice'
    })
], FilterPricePipe);



/***/ }),

/***/ "./src/app/pipes/filter-user.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-user.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterUserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUserPipe", function() { return FilterUserPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterUserPipe = class FilterUserPipe {
    transform(objs, term) {
        if (term == undefined) {
            return objs;
        }
        return objs.filter((obj) => {
            return (obj.email.toLowerCase().includes(term.toLowerCase()) || (Number(obj.Tel) == (term)));
        });
    }
};
FilterUserPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterUser'
    })
], FilterUserPipe);



/***/ }),

/***/ "./src/app/sevices/annonce.service.ts":
/*!********************************************!*\
  !*** ./src/app/sevices/annonce.service.ts ***!
  \********************************************/
/*! exports provided: AnnonceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnonceService", function() { return AnnonceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AnnonceService = class AnnonceService {
    //  annonceURL: string = "http://localhost:3000/annonces"
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/annonces`;
    }
    addAnnonce(prod, img) {
        let formData = new FormData();
        formData.append("img", img);
        formData.append("description", prod.description);
        formData.append("price", prod.price);
        formData.append("qty", prod.qty);
        formData.append("category", prod.category);
        formData.append("date", prod.date);
        formData.append("userId", prod.userId);
        return this.httpClient.post(this.url, formData);
    }
    getAllAnnonce() {
        return this.httpClient.get(this.url);
    }
    deleteAnnonce(id) {
        return this.httpClient.delete(`${this.url}/${id}`);
    }
    getAnnonceByUser(id) {
        return this.httpClient.get(`${this.url}/${id}`);
    }
    getAnnonceById(id) {
        return this.httpClient.get(`${this.url}/api/${id}`);
    }
    editAnnonceById(obj) {
        return this.httpClient.put(`${this.url}/${obj._id}`, obj);
    }
};
AnnonceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AnnonceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AnnonceService);



/***/ }),

/***/ "./src/app/sevices/order.service.ts":
/*!******************************************!*\
  !*** ./src/app/sevices/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OrderService = class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.orderURl = "http://localhost:3000/orders";
    }
    addOrder(obj) {
        return this.httpClient.post(this.orderURl, obj);
    }
    getOrderByUser(id) {
        return this.httpClient.get(`${this.orderURl}/${id}`);
    }
    deleteOrderById(id) {
        return this.httpClient.delete(`${this.orderURl}/${id}`);
    }
    getAllOder() {
        return this.httpClient.get(this.orderURl);
    }
    getUserOder(id) {
        return this.httpClient.get(`${this.orderURl}/api/${id}`);
    }
    getOrderById(id) {
        return this.httpClient.get(`${this.orderURl}/user/${id}`);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/sevices/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/sevices/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UserService = class UserService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.isAuthenticated = false;
        this.isClient = false;
        this.isUser = false;
        this.isAdmin = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authClient = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.err = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.userURL = "http://localhost:3000/users";
        var currentUser = (localStorage.getItem('userId'));
        if (currentUser === null) {
            this.isAuthenticated = false;
        }
        else {
            this.isAuthenticated = true;
            var currentUser = (localStorage.getItem('userRole'));
            if (currentUser === "Client") {
                this.isClient = true;
                // this.authClient.next(true);
            }
            else if (currentUser === "User") {
                this.isUser = true;
                // this.authUser.next(true);
            }
            else {
                this.isAdmin = true;
                // this.authAdmin.next(true);
            }
        }
    }
    singnUp(user, img) {
        let formData = new FormData();
        formData.append("img", img);
        formData.append("firstName", user.firstName);
        formData.append("lastName", user.lastName);
        formData.append("email", user.email);
        formData.append("Tel", user.Tel);
        formData.append("pwd", user.pwd);
        formData.append("role", user.role);
        formData.append("statu", user.statu);
        return this.httpClient.post(`${this.userURL}/signup`, formData);
    }
    getToken() {
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId() {
        return this.userId;
    }
    getRole() {
        return this.userRole;
    }
    getIsAuthClient() {
        return this.isClient;
    }
    getIsAuthUser() {
        return this.isUser;
    }
    getIsAuthAdmin() {
        return this.isAdmin;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthClient() {
        return this.authClient.asObservable();
    }
    getAuthUser() {
        return this.authUser.asObservable();
    }
    getAuthAdmin() {
        return this.authAdmin.asObservable();
    }
    login(email, pwd) {
        const authData = { email: email, pwd: pwd };
        this.httpClient
            .post(`${this.userURL}/login`, authData)
            .subscribe(response => {
            this.err.next(null);
            const token = response.token;
            const userRole = response.userRole;
            this.token = token;
            if (response.userRole === "Client") {
                this.isClient = true;
                this.authClient.next(true);
            }
            else if (response.userRole === "User") {
                this.isUser = true;
                this.authUser.next(true);
            }
            else {
                this.isAdmin = true;
                this.authAdmin.next(true);
            }
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userRole = response.userRole;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() +
                    expiresInDuration * 1000);
                this.saveAuthData(token, expirationDate, this.userId, this.userRole);
                if (response.userRole === 'Admin') {
                    this.router.navigate(["/shop"]);
                }
                else {
                    this.router.navigate(["/"]);
                }
            }
        }, err => {
            this.err.next(err);
        });
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.isClient = false;
        this.isUser = false;
        this.isAdmin = false;
        clearTimeout(this.tokenTimer);
        this.authClient.next(false);
        this.authUser.next(false);
        this.authAdmin.next(false);
        this.clearAuthData();
        this.router.navigate(["login"]);
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() -
            now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.userRole = authInformation.userRole;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("userRole");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            userRole: userRole
        };
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, userRole) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", userRole);
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
    }
    // Service CRUD
    getAllUsers() {
        return this.httpClient.get(this.userURL);
    }
    getUserById(id) {
        return this.httpClient.get(`${this.userURL}/${id}`);
    }
    deleteUserById(id) {
        return this.httpClient.delete(`${this.userURL}/${id}`);
    }
    editUserById(obj) {
        return this.httpClient.put(`${this.userURL}/${obj.id}`, obj);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ACHREF\Desktop\AngularJuillet22\shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map