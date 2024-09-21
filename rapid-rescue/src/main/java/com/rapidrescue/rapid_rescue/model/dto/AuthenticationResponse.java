package com.rapidrescue.rapid_rescue.model.dto;

public class AuthenticationResponse {
    private String jwt;

	public String getJwt() {
		return this.jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}


    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}
