package com.hpcl.securityequipmentmanagement.exception;
public class DuplicateResourceException extends RuntimeException{
    public DuplicateResourceException(String message){
        super(message);
    }
}