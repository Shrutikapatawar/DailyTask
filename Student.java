package com.tka;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/submit")
public class Student extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String Fname=req.getParameter("fname");
		String LName=req.getParameter("lname");
		String RollNum=req.getParameter("roll");
		String REG_No=req.getParameter("regno");
		String DOB=req.getParameter("dob");
		String GEN=req.getParameter("Gender");
		String Email=req.getParameter("email");
		String phone=req.getParameter("phone");
		String LOC=req.getParameter("city");
		String state=req.getParameter("state");
		String country=req.getParameter("country");
		String zipcode=req.getParameter("zipcode");
		String dept=req.getParameter("dept");
		String course=req.getParameter("course");
		String sem=req.getParameter("sem");
		String motherN=req.getParameter("mother");
		String FatherN=req.getParameter("father");
		String Blood=req.getParameter("blood");
		String Nation=req.getParameter("nationality");
		
		System.out.println(Nation);
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection c=DriverManager.getConnection("jdbc:mysql://localhost:3306/student","root","root");
			PreparedStatement ps=c.prepareStatement("insert into student_info(Fname, LName, RollNum, REG_No, DOB, GEN, Email, phone, LOC, state, country, zipcode, dept, course, sem, motherN, FatherN, Blood, Nation)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				ps.setString(1, Fname);
				ps.setString(2, LName);
				ps.setString(3, RollNum);
				ps.setString(4, REG_No);
				ps.setString(5, DOB);
				ps.setString(6, GEN);
				ps.setString(7, Email);
				ps.setString(8, phone);
				ps.setString(9, LOC);
				ps.setString(10, state);
				ps.setString(11, country);
				ps.setString(12, zipcode);
				ps.setString(13, dept);
				ps.setString(14, course);
				ps.setString(15, sem);
				ps.setString(16, motherN);
				ps.setString(17, FatherN);
				ps.setString(18, Blood);
				ps.setString(19, Nation);
				ps.executeUpdate();
				c.close();
				
				
				
				
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
