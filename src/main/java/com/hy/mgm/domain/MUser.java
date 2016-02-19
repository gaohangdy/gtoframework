/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hy.mgm.domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author hang
 */
@Entity
@Table(name = "m_user")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "MUser.findAll", query = "SELECT m FROM MUser m"),
    @NamedQuery(name = "MUser.findByUserid", query = "SELECT m FROM MUser m WHERE m.userid = :userid"),
    @NamedQuery(name = "MUser.findByUsername", query = "SELECT m FROM MUser m WHERE m.username = :username"),
    @NamedQuery(name = "MUser.findByPassword", query = "SELECT m FROM MUser m WHERE m.password = :password"),
    @NamedQuery(name = "MUser.findByType", query = "SELECT m FROM MUser m WHERE m.type = :type"),
    @NamedQuery(name = "MUser.findByRank", query = "SELECT m FROM MUser m WHERE m.rank = :rank"),
    @NamedQuery(name = "MUser.findByEmail", query = "SELECT m FROM MUser m WHERE m.email = :email"),
    @NamedQuery(name = "MUser.findByOfficetel", query = "SELECT m FROM MUser m WHERE m.officetel = :officetel"),
    @NamedQuery(name = "MUser.findByTel", query = "SELECT m FROM MUser m WHERE m.tel = :tel"),
    @NamedQuery(name = "MUser.findByInvoice", query = "SELECT m FROM MUser m WHERE m.invoice = :invoice"),
    @NamedQuery(name = "MUser.findByState", query = "SELECT m FROM MUser m WHERE m.state = :state"),
    @NamedQuery(name = "MUser.findByIcon", query = "SELECT m FROM MUser m WHERE m.icon = :icon")})
public class MUser implements Serializable {
    @OneToMany(mappedBy = "userid")
    private Collection<TSchedule> tScheduleCollection;
    @OneToMany(mappedBy = "userid")
    private Collection<TCourse> tCourseCollection;
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column(name = "userid")
    private String userid;
    @Size(max = 64)
    @Column(name = "username")
    private String username;
    @Size(max = 64)
    @Column(name = "password")
    private String password;
    @Column(name = "type")
    private BigInteger type;
    @Column(name = "rank")
    private BigInteger rank;
    // @Pattern(regexp="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", message="电子邮件无效")//if the field contains email address consider using this annotation to enforce field validation
    @Size(max = 64)
    @Column(name = "email")
    private String email;
    @Size(max = 18)
    @Column(name = "officetel")
    private String officetel;
    @Size(max = 11)
    @Column(name = "tel")
    private String tel;
    @Column(name = "invoice")
    private Boolean invoice;
    @Column(name = "state")
    private Boolean state;
    @Size(max = 128)
    @Column(name = "icon")
    private String icon;

    public MUser() {
    }

    public MUser(String userid) {
        this.userid = userid;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public BigInteger getType() {
        return type;
    }

    public void setType(BigInteger type) {
        this.type = type;
    }

    public BigInteger getRank() {
        return rank;
    }

    public void setRank(BigInteger rank) {
        this.rank = rank;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOfficetel() {
        return officetel;
    }

    public void setOfficetel(String officetel) {
        this.officetel = officetel;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public Boolean getInvoice() {
        return invoice;
    }

    public void setInvoice(Boolean invoice) {
        this.invoice = invoice;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (userid != null ? userid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MUser)) {
            return false;
        }
        MUser other = (MUser) object;
        if ((this.userid == null && other.userid != null) || (this.userid != null && !this.userid.equals(other.userid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.hy.mgm.domain.MUser[ userid=" + userid + " ]";
    }

    @XmlTransient
    public Collection<TSchedule> getTScheduleCollection() {
        return tScheduleCollection;
    }

    public void setTScheduleCollection(Collection<TSchedule> tScheduleCollection) {
        this.tScheduleCollection = tScheduleCollection;
    }

    @XmlTransient
    public Collection<TCourse> getTCourseCollection() {
        return tCourseCollection;
    }

    public void setTCourseCollection(Collection<TCourse> tCourseCollection) {
        this.tCourseCollection = tCourseCollection;
    }
    
}
