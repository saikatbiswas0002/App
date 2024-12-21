import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4 }}>

            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Company
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            About Us
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            Careers
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            Privacy Policy
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            Terms of Service
                        </Link>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Customer Support
                        </Typography>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            FAQ
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            Shipping & Returns
                        </Link>
                        <Link href="#" color="inherit" sx={{ display: "block", mb: 1 }}>
                            Contact Us
                        </Link>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="#" color="inherit" sx={{ mr: 2 }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" color="inherit" sx={{ mr: 2 }}>
                                <Instagram />
                            </IconButton>
                            <IconButton href="#" color="inherit" sx={{ mr: 2 }}>
                                <Twitter />
                            </IconButton>
                            <IconButton href="#" color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Stay updated with our latest products and offers.
                        </Typography>
                    </Grid>
                </Grid>


                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} YourCompanyName. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>

        </Box>
    );
};

export default Footer;
