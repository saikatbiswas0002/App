import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,updateQuantity } from "../Redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) dispatch(updateQuantity({ id, quantity }));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <h2>Cart</h2>
      <Table>

        <TableHead>

          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>

          {cartItems.map((item) => (

            <TableRow key={item.id}>
            
              <TableCell>{item.title}</TableCell>
              <TableCell>${item.price}</TableCell>

              <TableCell>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </TableCell>

              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>

              <TableCell>
                <Button
                  color="error"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </TableCell>

            </TableRow>
          ))}

        </TableBody>

      </Table>
      <h3>Total Price: ${total.toFixed(2)}</h3>
    </>
  );
};

export default CartPage;
