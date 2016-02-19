/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.domain;

/**
 *
 * @author hang
 */
public class User {

    private String userId;
    private String password;
    private String userName;
    private String email;
    private String officeTel;

    private String tel;
    private String state;
    private String role;
    private int type;
    private int rank;
    private boolean invoice;
    private String icon;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getOfficeTel() {
        return officeTel;
    }

    public void setOfficeTel(String officeTel) {
        this.officeTel = officeTel;
    }

    public int getType() {
        return type;
    }

    public void setType(int userType) {
        this.type = userType;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int userRank) {
        this.rank = userRank;
    }

    public boolean isInvoice() {
        return invoice;
    }

    public void setInvoice(boolean invoiceFlag) {
        this.invoice = invoiceFlag;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

}
