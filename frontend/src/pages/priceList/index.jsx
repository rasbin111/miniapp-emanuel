import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdAdd, IoMdPrint } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

import { MdSettingsSuggest } from "react-icons/md";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getData, editData } from "../../api/main";

import "./styles.css";
import { FaArrowRight } from "react-icons/fa6";
const DISPLAY_NAMES = {
  article_num: "Article No.",
  name: "Product/Service",
  in_price: "In Price",
  price: "Price",
  unit: "Unit",
  in_stock: "In Stock",
  description: "Description",
};

const PriceListPage = () => {
  const queryClient = useQueryClient();
  const [editableProducts, setEditableProducts] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedChange, setSelectedChange] = useState({});
  const [focusedProduct, setFocusedProduct] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await getData("/store/products/");

      if (response.status === 200) {
        return response.data;
      }
    },
  });

  const { mutate: editProduct } = useMutation({
    mutationKey: ["editProduct"],
    mutationFn: async (product) => {
      const response = await editData(
        `/store/products/${product.id}/`,
        product
      );
      if (response.status === 200) {
        return response.data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  useEffect(() => {
    if (products && products.length > 0) {
      setEditableProducts(products);
    }
  }, [products]);

  const handleValueChange = (idx, field, value) => {
    setEditableProducts((prev) => {
      const previousProduct = products.find((p) => p.id === idx);
      const previousValue = previousProduct ? previousProduct[field] : "";
      setSelectedChange({
        idx,
        field,
        displayField: DISPLAY_NAMES[field],
        value,
        previousValue,
      });
      return prev.map((p) => {
        if (p.id === idx) {
          return { ...p, [field]: value };
        } else {
          return p;
        }
      });
    });
  };

  const handleFocusOut = () => {
    if (isChanged)
    setShowConfirmation(true);
  };

  const handleConfirmChange = (confirmationResponse) => {
    if (confirmationResponse === "no") {
      setEditableProducts((prev) => {
        return prev.map((p) => {
          if (p.id === selectedChange.idx) {
            return {
              ...p,
              [selectedChange.field]: selectedChange.previousValue,
            };
          } else {
            return p;
          }
        });
      });
      setShowConfirmation(false);
    } else {
      setShowConfirmation(false);
      const selectedProduct = editableProducts.find(
        (product) => product.id === selectedChange.idx
      );
      if (selectedProduct) {
        editProduct(selectedProduct);
      }
    }
  };

  if (!isLoading && editableProducts && editableProducts.length > 0) {
    return (
      <div>
        <div className="price-list-header">
          <div className="price-list-header-left">
            <div className="search-bar">
              <input type="text" placeholder="Search Article No" />
              <FaSearch />
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search Product" />
              <FaSearch />
            </div>
          </div>
          <div className="price-list-header-right">
            <div className="plh-right-item">
              <span> New Product </span>
              <IoMdAdd />
            </div>
            <div className="plh-right-item">
              <span> Price List </span>
              <IoMdPrint />
            </div>
            <div className="plh-right-item">
              <span> Advanced Mode </span>
              <MdSettingsSuggest />
            </div>
          </div>
        </div>
        <div className="price-list-body">
          <div className="price-list-table">
            <div className="price-list-table-header">
              <div> </div>
              <div> Article No. </div>
              <div> Product/Service </div>
              <div> In Price </div>
              <div> Price </div>
              <div> Unit </div>
              <div> In Stock </div>
              <div> Description </div>
              <div> </div>
            </div>
            <div className="price-list-table-body">
              {editableProducts.map((product) => {
                return (
                  <div className="pltb-row" key={product.id}>
                    {focusedProduct === product.id? <FaArrowRight />: "" }
                    <input
                      type="text"
                      value={product.article_num}
                      onChange={(e) => {
                        setIsChanged(true);
                        handleValueChange(
                          product.id,
                          "article_num",
                          e.target.value
                        );
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setFocusedProduct(product.id)}
                    />
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => {
                        setIsChanged(true);
                        handleValueChange(product.id, "name", e.target.value);
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />

                    <input
                      type="text"
                      value={product.in_price}
                      onChange={(e) => {
                        setIsChanged(true);

                        handleValueChange(
                          product.id,
                          "in_price",
                          e.target.value
                        );
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />

                    <input
                      type="text"
                      value={product.price}
                      onChange={(e) => {
                        setIsChanged(true);

                        handleValueChange(product.id, "price", e.target.value);
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />

                    <input
                      type="text"
                      value={product.unit}
                      onChange={(e) => {
                        setIsChanged(true);

                        handleValueChange(product.id, "unit", e.target.value);
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />

                    <input
                      type="text"
                      value={product.in_stock}
                      onChange={(e) => {
                        setIsChanged(true);
                        handleValueChange(
                          product.id,
                          "in_stock",
                          e.target.value
                        );
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />

                    <input
                      type="text"
                      value={product.description}
                      onChange={(e) => {
                        setIsChanged(true);
                        handleValueChange(
                          product.id,
                          "description",
                          e.target.value
                        );
                      }}
                      onBlur={() => handleFocusOut()}
                      onFocus={() => setIsFocusedProduct(product.id)}
                    />
                    <div> ...</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {showConfirmation && (
          <div className="confirmation-dialog">
            <div className="confirmation-content">
              <p>Do you want to change this? </p>

              <p>{`Do you want to change ${selectedChange.displayField} to ${selectedChange.value}?`}</p>
              <div className="confirmation-buttons">
                <button onClick={() => handleConfirmChange("yes")} className="">
                  Yes
                </button>
                <button onClick={() => handleConfirmChange("no")}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default PriceListPage;
