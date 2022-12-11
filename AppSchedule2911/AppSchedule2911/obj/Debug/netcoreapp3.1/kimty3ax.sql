IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Appointment] (
    [Id] int NOT NULL IDENTITY,
    [FName] nvarchar(max) NOT NULL,
    [LName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NULL,
    [Mobile] nvarchar(10) NOT NULL,
    [Date] datetime2 NOT NULL,
    [Time] nvarchar(max) NULL,
    [Doctor] nvarchar(max) NULL,
    [Confirm] nvarchar(max) NULL,
    CONSTRAINT [PK_Appointment] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Cancellation] (
    [Id] int NOT NULL IDENTITY,
    [FName] nvarchar(max) NOT NULL,
    [LName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NULL,
    [Mobile] nvarchar(10) NOT NULL,
    [Date] datetime2 NOT NULL,
    [Time] nvarchar(max) NULL,
    [Doctor] nvarchar(max) NULL,
    [Confirm] nvarchar(max) NULL,
    CONSTRAINT [PK_Cancellation] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Contact] (
    [CId] int NOT NULL IDENTITY,
    [CName] nvarchar(max) NULL,
    [CEmail] nvarchar(max) NULL,
    [CMessage] nvarchar(max) NULL,
    CONSTRAINT [PK_Contact] PRIMARY KEY ([CId])
);

GO

CREATE TABLE [Doctor] (
    [Did] int NOT NULL IDENTITY,
    [DName] nvarchar(max) NULL,
    [DSpecialization] nvarchar(max) NULL,
    CONSTRAINT [PK_Doctor] PRIMARY KEY ([Did])
);

GO

CREATE TABLE [Login] (
    [Email] nvarchar(450) NOT NULL,
    [Password] nvarchar(max) NULL,
    CONSTRAINT [PK_Login] PRIMARY KEY ([Email])
);

GO

CREATE TABLE [Register] (
    [Uid] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    [UserName] nvarchar(max) NULL,
    [Password] nvarchar(max) NULL,
    [Email] nvarchar(max) NULL,
    [Phone] nvarchar(max) NULL,
    [DOB] datetime2 NOT NULL,
    CONSTRAINT [PK_Register] PRIMARY KEY ([Uid])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20221204105810_v3', N'3.1.30');

GO

